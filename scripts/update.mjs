// Weekly refresh: read data/projects.json, pull repo health from the GitHub API,
// write data/health.json and regenerate README.md. Thresholds come from env.
import { readFileSync, writeFileSync } from 'node:fs'

const ACTIVE_DAYS = Number(process.env.ACTIVE_DAYS)
const SLOW_DAYS = Number(process.env.SLOW_DAYS)
const MIN_STARS = Number(process.env.MIN_STARS)
const RISING_MAX_AGE_DAYS = Number(process.env.RISING_MAX_AGE_DAYS)
if (![ACTIVE_DAYS, SLOW_DAYS, MIN_STARS, RISING_MAX_AGE_DAYS].every(Number.isFinite)) {
  throw new Error('Set ACTIVE_DAYS, SLOW_DAYS, MIN_STARS and RISING_MAX_AGE_DAYS (see .env.example)')
}
const token = process.env.GITHUB_TOKEN
const projects = JSON.parse(readFileSync('data/projects.json', 'utf8'))
const previous = (() => {
  try {
    return JSON.parse(readFileSync('data/health.json', 'utf8'))
  } catch {
    return {}
  }
})()

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'awesome-selfhosted-ai-refresh',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
}

async function fetchHealth(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}`, { headers })
  if (res.status === 404) return { status: 'gone' }
  if (!res.ok) return null // transient: keep the previous snapshot
  const r = await res.json()
  const days = (Date.now() - new Date(r.pushed_at).getTime()) / 86400000
  let status = 'active'
  if (r.archived) status = 'archived'
  else if (days > SLOW_DAYS) status = 'stale'
  else if (days > ACTIVE_DAYS) status = 'slow'
  return {
    status,
    stars: r.stargazers_count,
    pushed: r.pushed_at.slice(0, 10),
    created: r.created_at.slice(0, 10),
    license: r.license?.spdx_id ?? 'NOASSERTION',
    checked: new Date().toISOString().slice(0, 10),
  }
}

const health = {}
for (const p of projects) {
  const fresh = await fetchHealth(p.repo)
  health[p.repo] = fresh ?? previous[p.repo] ?? { status: 'unknown' }
}
writeFileSync('data/health.json', JSON.stringify(health, null, 2) + '\n')

const fmt = (n) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n ?? 0))
const badge = (path, alt) => `![${alt}](https://img.shields.io/${path}${path.includes('?') ? '&' : '?'}style=flat-square)`
const esc = (t) => encodeURIComponent(t.replace(/-/g, '--').replace(/_/g, '__'))
const sentence = (t) => {
  const c = t.charAt(0).toUpperCase() + t.slice(1)
  return /[.!?]$/.test(c) ? c : `${c}.`
}
// README stays a clean awesome-style list; the numbers live in LIVE.md.
const item = (p) =>
  `- [${p.name}](https://github.com/${p.repo}) - ${sentence(p.description)}${p.tier === 'source-available' ? ` (${p.license_note})` : ''}`
const slug = (c) => c.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, '-')
const byName = (a, b) => a.name.localeCompare(b.name)

const healthy = projects.filter((p) => ['active', 'slow', 'unknown'].includes(health[p.repo].status))
// A rising project graduates to its category at MIN_STARS, and retires if it
// is still under the floor once it is older than RISING_MAX_AGE_DAYS.
const ageDays = (p) => (Date.now() - new Date(health[p.repo].created ?? Date.now()).getTime()) / 86400000
const stillRising = (p) => p.rising && (health[p.repo].stars ?? 0) < MIN_STARS
const retired = healthy.filter((p) => stillRising(p) && ageDays(p) > RISING_MAX_AGE_DAYS)
const alive = healthy.filter((p) => !retired.includes(p))
const dead = projects.filter((p) => !healthy.includes(p))
const rising = alive.filter(stillRising)
const open = alive.filter((p) => p.tier !== 'source-available' && !rising.includes(p))
const sourceAvail = alive.filter((p) => p.tier === 'source-available' && !rising.includes(p))
const cats = [...new Set(open.map((p) => p.category))].sort()

const totalStars = alive.reduce((n, p) => n + (health[p.repo].stars ?? 0), 0)
const activeCount = alive.filter((p) => health[p.repo].status === 'active').length
const today = new Date().toISOString().slice(0, 10)
const count = (c) => open.filter((p) => p.category === c).length

let out = `# Awesome Self-Hosted AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Open-source AI you can run on your own hardware or server.

${alive.length} projects across local LLMs, chat interfaces, agents, MCP servers, RAG, speech and image generation. A weekly job checks every project against the GitHub API, and anything archived, deleted or silent for over a year moves to [UNMAINTAINED.md](UNMAINTAINED.md).

**${alive.length}** projects | **${activeCount}** active in the last ${ACTIVE_DAYS} days | **${fmt(totalStars)}** combined stars | **${dead.length + retired.length}** unmaintained | refreshed ${today}

See the [live health table](LIVE.md) for stars, last push and license per project.

## Contents

${cats.map((c) => `- [${c}](#${slug(c)}) (${count(c)})`).join('\n')}${rising.length ? `\n- [Rising](#rising) (${rising.length})` : ''}${sourceAvail.length ? `\n- [Source-Available](#source-available) (${sourceAvail.length})` : ''}

`
for (const c of cats) {
  out += `## ${c}\n\n${open.filter((p) => p.category === c).sort(byName).map(item).join('\n')}\n\n`
}
if (rising.length) {
  out += `## Rising\n\nNew projects under ${MIN_STARS} stars that are worth watching. They move to their category at ${MIN_STARS} stars.\n\n${rising.sort(byName).map((p) => `${item(p)} (${p.category})`).join('\n')}\n\n`
}
if (sourceAvail.length) {
  out += `## Source-Available\n\nWidely used and self-hostable, but the license adds terms beyond a standard open-source license. Check them before commercial use.\n\n${sourceAvail.sort(byName).map(item).join('\n')}\n\n`
}
out += `## Contributing\n\nSee [CONTRIBUTING.md](CONTRIBUTING.md). New projects go in \`data/projects.json\`; this file is generated.\n`
writeFileSync('README.md', out)

const tableHead = '| | Project | Stars | Last push | License | Status |\n| :-: | --- | ---: | --- | --- | --- |'
// Colour follows our own thresholds, not the shields recency scale.
const STATUS_COLOR = { active: 'brightgreen', slow: 'yellow', stale: 'orange', archived: 'red', gone: 'red', unknown: 'lightgrey' }
const statusBadge = (st) => `![${st}](https://img.shields.io/badge/${st}-${STATUS_COLOR[st] ?? 'lightgrey'}?style=flat-square)`
const trow = (p) => {
  const h = health[p.repo]
  const lic = p.tier === 'source-available' ? p.license_note : h.license
  const logo = `<img src="https://github.com/${p.repo.split('/')[0]}.png?size=40" width="20" height="20" alt="">`
  return `| ${logo} | [${p.name}](https://github.com/${p.repo}) | ${fmt(h.stars)} | ${h.pushed ?? '?'} | ${lic} | ${statusBadge(h.status)} |`
}
let live = `# Live Health Table\n\nRefreshed ${today} by the weekly job. Status is \`active\` (pushed within ${ACTIVE_DAYS} days) or \`slow\` (within ${SLOW_DAYS} days). Back to the [list](README.md).\n\n`
for (const c of cats) {
  live += `## ${c}\n\n${tableHead}\n${open.filter((p) => p.category === c).sort(byName).map(trow).join('\n')}\n\n`
}
if (rising.length) live += `## Rising\n\n${tableHead}\n${rising.sort(byName).map(trow).join('\n')}\n\n`
if (sourceAvail.length) live += `## Source-Available\n\n${tableHead}\n${sourceAvail.sort(byName).map(trow).join('\n')}\n`
writeFileSync('LIVE.md', live)

let un = `# Unmaintained\n\nProjects that were archived, deleted or silent for over ${SLOW_DAYS} days. They return to the main list on the next weekly refresh if they become active again.\n\n`
const lines = [
  ...dead.map((p) => `- [${p.name}](https://github.com/${p.repo}) - ${sentence(p.description)} (${health[p.repo].status}, last push ${health[p.repo].pushed ?? 'unknown'})`),
  ...retired.map((p) => `- [${p.name}](https://github.com/${p.repo}) - ${sentence(p.description)} (left Rising: still under ${MIN_STARS} stars after ${RISING_MAX_AGE_DAYS} days)`),
]
un += lines.length ? lines.sort().join('\n') + '\n' : '_Nothing here yet._\n'
writeFileSync('UNMAINTAINED.md', un)
console.log(`refreshed ${projects.length} projects, ${dead.length + retired.length} unmaintained, ${rising.length} rising`)

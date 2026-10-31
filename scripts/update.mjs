// Weekly refresh: read data/projects.json, pull repo health from the GitHub API,
// write data/health.json and regenerate README.md. Thresholds come from env.
import { readFileSync, writeFileSync } from 'node:fs'

const ACTIVE_DAYS = Number(process.env.ACTIVE_DAYS)
const SLOW_DAYS = Number(process.env.SLOW_DAYS)
const MIN_STARS = Number(process.env.MIN_STARS)
if (![ACTIVE_DAYS, SLOW_DAYS, MIN_STARS].every(Number.isFinite)) {
  throw new Error('Set ACTIVE_DAYS, SLOW_DAYS and MIN_STARS (see .env.example)')
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

const fmt = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n ?? '?'))
const row = (p) => {
  const h = health[p.repo]
  return `| [${p.name}](https://github.com/${p.repo}) | ${fmt(h.stars)} | ${h.pushed ?? '?'} | ${h.license ?? '?'} | ${h.status} | ${p.description} |`
}
const head = '| Project | Stars | Last push | License | Status | What it is |\n| --- | ---: | --- | --- | --- | --- |'
const live = projects.filter((p) => ['active', 'slow', 'unknown'].includes(health[p.repo].status))
const dead = projects.filter((p) => !live.includes(p))
const cats = [...new Set(live.map((p) => p.category))].sort()
const total = live.length

let out = `# Awesome Self-Hosted AI

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Weekly refresh](https://github.com/glincker/awesome-selfhosted-ai/actions/workflows/weekly.yml/badge.svg)](https://github.com/glincker/awesome-selfhosted-ai/actions/workflows/weekly.yml)

Open-source AI you can run on your own hardware: local LLMs, chat UIs, agents, MCP servers, RAG, speech and image generation.

Every entry is checked by a weekly job against the GitHub API. Projects with no push for more than ${SLOW_DAYS} days, or that get archived or deleted, move to the Unmaintained list automatically, so this list does not rot.

**${total} maintained projects.** Status: \`active\` pushed within ${ACTIVE_DAYS} days, \`slow\` pushed within ${SLOW_DAYS} days.

Missing something new? [Submit a project](https://github.com/glincker/awesome-selfhosted-ai/issues/new?template=submit.yml). Rules are in [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents

${cats.map((c) => `- [${c}](#${c.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, '-')})`).join('\n')}
- [Unmaintained](#unmaintained)

`
for (const c of cats) {
  out += `## ${c}\n\n${head}\n${live.filter((p) => p.category === c).sort((a, b) => a.name.localeCompare(b.name)).map(row).join('\n')}\n\n`
}
out += `## Unmaintained\n\nKept here for reference. If a project is active again it returns to its category on the next refresh.\n\n`
out += dead.length ? `${head}\n${dead.map(row).join('\n')}\n\n` : '_Nothing here yet._\n\n'
out += `## License\n\n[CC0 1.0](LICENSE). Data refreshed ${new Date().toISOString().slice(0, 10)}.\n`
writeFileSync('README.md', out)
console.log(`refreshed ${projects.length} projects, ${dead.length} unmaintained`)

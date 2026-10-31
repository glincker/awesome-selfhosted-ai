// Schema and style check for data/projects.json. Run in CI on every PR.
import { readFileSync } from 'node:fs'

const MIN_STARS = Number(process.env.MIN_STARS)
const RISING_MIN_STARS = Number(process.env.RISING_MIN_STARS)
const RISING_MAX_AGE_DAYS = Number(process.env.RISING_MAX_AGE_DAYS)
const projects = JSON.parse(readFileSync('data/projects.json', 'utf8'))
const errors = []
const seen = new Set()

for (const p of projects) {
  const id = p.repo ?? JSON.stringify(p)
  for (const k of ['name', 'repo', 'category', 'description']) {
    if (typeof p[k] !== 'string' || !p[k].trim()) errors.push(`${id}: missing ${k}`)
  }
  if (!/^[\w.-]+\/[\w.-]+$/.test(p.repo ?? '')) errors.push(`${id}: repo must be owner/name`)
  if (seen.has(p.repo?.toLowerCase())) errors.push(`${id}: duplicate`)
  seen.add(p.repo?.toLowerCase())
  if (p.rising !== undefined && p.rising !== true) errors.push(`${id}: rising must be true`)
  if (p.tier !== undefined && p.tier !== 'source-available') errors.push(`${id}: unknown tier`)
  if (p.tier === 'source-available' && !p.license_note) errors.push(`${id}: license_note required`)
  if ((p.description ?? '').length > 120) errors.push(`${id}: description over 120 chars`)
  if (/[\u2013\u2014]/.test(p.description ?? '')) errors.push(`${id}: no em or en dashes`)
}

if (Number.isFinite(MIN_STARS)) {
  const token = process.env.GITHUB_TOKEN
  const changed = process.env.CHECK_REPOS?.split(',').filter(Boolean) ?? []
  for (const repo of changed) {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
    if (!res.ok) { errors.push(`${repo}: not found`); continue }
    const r = await res.json()
    const entry = projects.find((x) => x.repo.toLowerCase() === repo.toLowerCase())
    const floor = entry?.rising ? RISING_MIN_STARS : MIN_STARS
    if (r.archived) errors.push(`${repo}: archived`)
    if (r.stargazers_count < floor) errors.push(`${repo}: under ${floor} stars`)
    if (entry?.rising) {
      const age = (Date.now() - new Date(r.created_at).getTime()) / 86400000
      if (age > RISING_MAX_AGE_DAYS) errors.push(`${repo}: too old for Rising (over ${RISING_MAX_AGE_DAYS} days)`)
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log(`ok: ${projects.length} projects`)

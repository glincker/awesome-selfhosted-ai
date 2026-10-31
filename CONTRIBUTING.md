# Contributing

The list is generated. Edit `data/projects.json`, never `README.md`.

## What gets in

- Open source licence, and you can run it on your own hardware or server. Hosted-only products are out.
- Not archived, and pushed to within the last 90 days.
- At least 500 stars, or a clear reason it is new and worth watching (say so in the PR).
- Working install instructions (Docker image, compose file or a documented binary).
- One project per pull request.
- Your own project is welcome, but say so in the PR.

## How to add one

1. Open an issue with the "Submit a project" form, or send a PR that appends an object to `data/projects.json`:

   ```json
   { "name": "Name", "repo": "owner/name", "category": "Chat Interfaces", "description": "One sentence, max 120 characters." }
   ```

2. Use one of the existing categories.
3. Describe it in your own words. No marketing language, no emoji, no em or en dashes.

CI checks the schema, duplicates, and that the new repo exists, is not archived and meets the star floor. Stars, last push and status are filled in by the weekly job, so do not add them.

## What gets removed

The weekly job moves a project to Unmaintained when it is archived, deleted, or has no push for more than a year. It returns on its own when it is active again.

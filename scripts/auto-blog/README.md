# Auto blog

Publishes one post per run to `content/posts/*.md`; the site (`/blog/[slug]`, sitemap, RSS) picks it up on the next deploy.

- Schedule: `.github/workflows/auto-blog.yml` (10:00 and 18:00 Pakistan time).
- Slot `am`: free-tool how-to posts and evergreen guides (alternating days). Slot `pm`: trending dev topic (GitHub releases, Hacker News, dev.to).
- Secret needed: `GEMINI_API_KEY`. Optional repo variable: `GEMINI_MODEL` (default `gemini-2.5-flash`, falls back to `gemini-2.5-flash-lite`).
- Edit `topics.json` to add/reorder evergreen topics (top of the list is used first).
- Posts that fail the quality gate (length, structure, banned phrases, unsafe HTML) are NOT published; the run ends with a warning.
- Delete or edit a bad post: remove/edit its file in `content/posts/` and push.
- Local test: `GEMINI_API_KEY=... node scripts/auto-blog/generate.mjs --lane tool --dry`

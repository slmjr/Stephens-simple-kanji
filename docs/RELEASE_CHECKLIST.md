# Release Checklist

Before publishing:

- [ ] Confirm `index.html` loads locally.
- [ ] Run `npm run build` and `npm test`.
- [ ] Confirm `git diff --exit-code -- index.html` after building.
- [ ] Confirm JavaScript syntax passes.
- [ ] Confirm app title is `Stephen's Simple Kanji`.
- [ ] Confirm no unwanted proprietary platform references remain in visible text.
- [ ] Confirm EDRDG attribution appears in app and docs.
- [ ] Confirm `README.md`, `LICENSE`, `NOTICE.md`, `DATA_LICENSE.md`, and `PRIVACY.md` exist.
- [ ] Confirm donation links are optional support only.
- [ ] Confirm backup/export/import works.
- [ ] Confirm level-jump recovery appears in settings.
- [ ] Add screenshots to `screenshots/` if desired.
- [ ] Confirm dashboard, lesson, review, reporting, analytics, and Data views at desktop and mobile widths.
- [ ] Confirm no browser console errors occur.
- [ ] Set `repositoryUrl` in `src/data/metadata.json` to the public GitHub repository URL.
- [ ] Enable GitHub Pages.
- [ ] Test the GitHub Pages URL.

Before changing GitHub Pages domain/path:

- [ ] Tell users to export backups first.
- [ ] Import backup after migration if progress appears missing.

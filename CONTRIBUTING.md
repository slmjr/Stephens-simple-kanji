# Contributing

Contributions are welcome.

Please preserve:

- EDRDG attribution notices
- CC BY-SA 4.0 data-license references
- privacy/backup warnings
- donation wording that makes clear donations are optional

## Development notes

The distributed app is a standalone `index.html` file. Edit files under `src/`, then run:

```bash
npm run build
npm test
```

Commit the regenerated `index.html` with the source change. Keep the distribution usable without a backend or installation step.

If updating embedded dictionary-derived data, document the source files, source date if known, and transformations used.

Do not add proprietary third-party course ordering, mnemonics, or item text.

## Memory aids and content changes

- Follow [`docs/MEMORY_AIDS.md`](docs/MEMORY_AIDS.md).
- Do not present an invented visual story as character etymology.
- Prefer listed readings and bundled vocabulary over English sound-alikes.
- Include a reliable source when correcting dictionary or historical claims.
- Preserve user backup compatibility when changing state fields.

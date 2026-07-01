# Stephen's Simple Kanji

A free, offline-first, frequency-ordered kanji SRS for learning the 2000 most common kanji in 40 levels.

Stephen's Simple Kanji is a single-file browser app: no account, no server, no build step required. It includes lessons, reviews, SRS scheduling, beginner-safe meaning display, readings with kana/romaji support, vocabulary examples, mnemonics, progress backup/import, and a recovery level-jump option.


Features

- **2000 kanji** split into **40 levels** of 50 kanji each
- Ordered by **KANJIDIC2 frequency rank**, not by a proprietary course order
- Browser-only SRS with stages: Seed, Sprout, Leaf, Branch, Tree, Grove, Forest, Mastered
- Meaning and reading review prompts
- Kana, katakana, and forgiving romaji input support
- Beginner-safe primary meanings with expandable dictionary notes
- Kunyomi markers such as prefix/suffix-only and okurigana notes
- Vocabulary examples from JMdict-derived data, with simplified part-of-speech labels
- Personal mnemonic notes
- JSON backup export/import
- Level-jump recovery option if browser storage is lost
- Optional donation links; all features remain free


Try it locally

Download or clone the repository, then open:

```text
index.html
```

No install is required.


GitHub Pages deployment

This is a static app and works well with GitHub Pages.

Suggested setup:

1. Put `index.html` in the repository root.
2. In GitHub, go to **Settings → Pages**.
3. Choose the `main` branch and root folder.
4. Publish.

Important: browser storage is scoped to the exact site origin. Moving from one URL to another, such as from `https://username.github.io/repo/` to a custom domain, can make previous localStorage progress appear missing. Export a backup before changing domains or paths.


Privacy and backups

Your progress is saved only in your browser's `localStorage`.

The app does **not** require an account and does **not** sync progress to a server.

Stored locally:

- display name
- current level
- lesson/review state
- SRS due dates
- accuracy counts
- personal mnemonics
- settings
- backup metadata

Your data can be lost if you:

- clear history/cache/site data
- use private/incognito browsing
- switch browsers/devices
- run cleanup tools
- change GitHub Pages URL/domain/path

Use **Download backup file** regularly. Importing a backup is the only full restore method.

#
Level-jump recovery

If your storage is lost and you do not have a backup, the Settings page includes a **jump to level** option.

This can help you resume near your previous level, but it does **not** restore:

- review history
- SRS due dates
- item accuracy
- personal mnemonics
- mastered-item state

For full recovery, use an exported backup JSON file.


Data and attribution

Kanji and dictionary-derived fields are based in part on **KANJIDIC2** and **JMdict** from the Electronic Dictionary Research and Development Group (EDRDG), used under Creative Commons Attribution-ShareAlike 4.0 International.

Stephen's Simple Kanji adds its own frequency-level ordering, SRS labels, UI, mnemonics, beginner display filters, and learning flow.

See:

- [`NOTICE.md`](NOTICE.md)
- [`DATA_LICENSE.md`](DATA_LICENSE.md)


Donations

Stephen's Simple Kanji is free to use. Donations are optional support only and do not unlock features, change licensing terms, or affect access to the app.

- Ko-fi: <https://ko-fi.com/smjp53096>
- EVM: `0x56F9ef45f059db623fC971dFfF79B3Aa5717cFDb`
- Bitcoin: `bc1q89jdjfnds2sgnuzqqjhqmnlcahu9zcpx23ycgh`
- Solana: `HDt7aHZSe2w4CjHj4sNFHAbQVdShADBrgS1hRrRo1n8b`


License

Original application code, UI, SRS logic, mnemonics, and project documentation are provided under the MIT License. Embedded dictionary-derived data remains subject to EDRDG/CC BY-SA 4.0 licensing terms. See [`LICENSE`](LICENSE), [`NOTICE.md`](NOTICE.md), and [`DATA_LICENSE.md`](DATA_LICENSE.md).

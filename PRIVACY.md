# Privacy

Stephen's Simple Kanji is a static browser app.

It does not require an account, backend server, or cloud sync.

## Local data storage

Progress is stored in your browser's `localStorage` only. This can include:

- display name
- current level
- lesson state
- review state
- SRS stages and due timestamps
- accuracy statistics
- personal mnemonics
- settings
- backup metadata

## No server sync

The app does not send your learning progress to a server. If hosted on GitHub Pages, GitHub serves the static file, but the SRS progress itself remains in your browser storage.

## Backup warning

Browser storage is convenient but fragile. It can be erased or become unavailable if you:

- clear history/cache/site data
- use browser cleanup tools
- use private/incognito mode
- switch browsers or devices
- change the hosted URL/domain/path

Download backup JSON files regularly and before clearing browser data.

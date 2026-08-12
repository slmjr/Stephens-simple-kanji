# Security

Stephen's Simple Kanji is a static browser app with no backend server.

## Backup imports

Only import backup JSON files that you trust. The app is designed for local progress backups, not arbitrary untrusted data exchange.

Imported text is escaped before it is shown in the interface. Changes that render backup or dictionary values as HTML should be treated as security-sensitive.

## External connections

The application has no analytics, account service, AI provider, or study-data API. The only external navigation in the default build is initiated by the learner, such as opening Ko-fi or a configured GitHub repository.

## Reporting issues

If you find a security or privacy issue, open a GitHub issue or contact the maintainer privately if a contact method is provided.

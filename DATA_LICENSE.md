# Data License Notes

Stephen's Simple Kanji embeds transformed dictionary-derived data from:

- KANJIDIC2
- JMdict / JMdict English gloss data
- Electronic Dictionary Research and Development Group (EDRDG)

Source license information:

- <https://www.edrdg.org/edrdg/licence.html>
- <https://creativecommons.org/licenses/by-sa/4.0/>

## Transformations

The embedded app data may include transformations such as:

- selection of 2000 frequency-ranked kanji
- splitting into 40 levels of 50 kanji
- extracting meanings, readings, stroke counts, grade/JLPT/frequency fields
- adding beginner-safe primary meaning display while preserving raw meanings
- extracting vocabulary examples
- simplifying part-of-speech labels
- normalizing reading display and romaji acceptance
- embedding the dataset into a standalone HTML file

These transformed data fields are not an official EDRDG distribution.

## License separation

The original app code and documentation are MIT licensed. The embedded dictionary-derived data remains subject to EDRDG/CC BY-SA 4.0 obligations. Redistributors should preserve attribution and comply with applicable third-party data license terms.

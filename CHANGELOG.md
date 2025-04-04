# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- markdownlint-configure-file { "MD024": { "siblings_only": true } } -->

## Unreleased

## [2.3.1] - 2025-01-04

### Added

- Described the [Config Schema](https://silverbullet.md/Schema#Config%20schema) for in-editor config validation

### Changed

- Adjusted command priority: version lowered, search increased
- Improved error message for failed command

## [2.3.0] - 2024-09-21

### Added

- Using virtual page to show results

## [2.2.0] - 2024-09-20

### Added

- Configurable marker for highlighting the matched part of line

### Changed

- Configuration now uses [Space Config](https://silverbullet.md/Space%20Config) instead of only [SETTINGS](https://silverbullet.md/SETTINGS) page
- Improved results page formatting

### Fixed

- Finding multiple matches in a line

## [2.1.0] - 2024-07-30

### Added

- Support for alternation and repetition operators (Extended Regular Expression)
- Show whether text or regex pattern was used in notification and results

### Fixed

- Handling of files with non-ASCII paths

## [2.0.0] - 2024-07-29

### Changed

- Now depends on Git instead of ripgrep
- Positions in pages are reported using line and column number, instead of character position

## [1.1.0] - 2024-07-24

### Added

- Setting for smart case search

## [1.0.0] - 2024-07-24

Initial release with core functionality

[2.3.1]: https://github.com/Maarrk/silverbullet-grep/compare/v2.3.0...v2.3.1
[2.3.0]: https://github.com/Maarrk/silverbullet-grep/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/Maarrk/silverbullet-grep/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/Maarrk/silverbullet-grep/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/Maarrk/silverbullet-grep/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/Maarrk/silverbullet-grep/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Maarrk/silverbullet-grep/releases/tag/v1.0.0

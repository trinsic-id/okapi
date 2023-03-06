---
name: New Release Checklist
about: Maintainers checklist for publishing new releases
title: New Release Checklist - vX.X.0
labels: 'release'
assignees: 'fundthmcalculus tmarkovski'

---

# Description

This issue is tracking steps to complete a release ensuring all artifacts are correctly produced. This covers both automated tasks and manual tasks.

# Release

Manual steps are instructions that need to be taken in order to have a full release on all associated repos. Validation steps consist of checklist of items to verify, to ensure all reqiuirements and releases have gone without problems and that the correct assets are created needed for the manual steps.

# Validation Steps

- [ ] Builds complete successfully
- [ ] Release actions complete successfully
- [ ] **Assets** &mdash; ensure the following assets have been created by the release actions and are uploaded as assets in the release
    - [ ] Debian Package, named `okapi_X.X.0_amd64.deb`
    - [ ] Okapi tarball (for Homebrew), named `okapi-X.X.0.tar.gz`
    - [ ] Okapi vendored tarball (for Homebrew), named `okapi-vendor-X.X.0.tar.gz`
    - [ ] Library bundle named `libs.zip`
- [ ] **Package Releases** &mdash; validate if packages have been correctly released
  - [ ] nuget.org
  - [ ] npmjs.com
  - [ ] pypi.org
  - [ ] golang tag
  - [ ] Dart pub.dev
  - [ ] Java jar file uploaded to release

## Manual Steps

- [ ] **Github Release** &mdash; create a new release following the semantic versioning guidelines. The next available version should increase either the Major or Minor version, following the semver recommendations. Patch should be set to `0`. This allows individual languages to publish hotfixes under the same version with new patch. An example version format is `v1.2.0`.
  - [ ] Ensure code contributions and commits are included in the release description, either by utilizing the GitHub automatic options or entering them manually.
- [ ] **Swift Release** &mdash; create new release in associated repository for Swift package at [trinsic-id/okapi-swift](https://github.com/trinsic-id/okapi-swift). The release version in this repo follows a pattern that doesn't include leading `v`. Example release format is `1.2.0`.
- [ ] External Tools
  - [ ] **Homebrew** &mdash; to create a new tap, follow the instructions at [trinsic-id/homebrew-tap](https://github.com/trinsic-id/homebrew-tap) by making a new PR with the required information. This step depends on a release asset package.
  - [ ] **Windows Package Manager** (winget) &mdash; TODO: Add details
  - [ ] **NixOS** &mdash; TODO: Add details
- [ ] **Samples** &mdash; if required, code samples at https://github.com/trinsic-id/okapi-examples should be updated to match the version
- [ ] Release announced to Trinsic Team

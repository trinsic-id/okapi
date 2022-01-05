---
name: New Release Checklist
about: Maintainers checklist for publishing new releases
title: New Release Checklist - vX.X.0
labels: ''
assignees: 'fundthmcalculus tmarkovski'

---

# Description

This issue is tracking steps to complete a release ensuring all artifacts are correctly produced. This covers both automated tasks and manual tasks.

# Release Steps

- [ ] Github Release &mdash; create a new release following the semantic versioning guidelines. The next available version should increase either the Major or Minor version, following the semver recommendations. Patch should be set to `0`. This allows individual languages to publish hotfixes under the same version with new patch. An example version format is `v1.2.0`.
  - [ ] Ensure code contributions and commits are included in the release description, either by utilizing the GitHub automatic options or entering them manually.
- [ ] Swift Release &mdash; create new release in associated repository for Swift package at https://github.com/trinsic-id/okapi-swift. The release version in this repo follows a pattern that doesn't include leading `v`. Example release format is `1.2.0`.
- [ ] External Tools
  - [ ] Homebrew &mdash; TODO: Add details
  - [ ] Windows Package Manager (winger) &mdash; TODO: Add details
  - [ ] NixOS &mdash; TODO: Add details
- [ ] Samples &mdash; if required, code samples at https://github.com/trinsic-id/okapi-examples should be updated to match the version

# Validation

- [ ] Builds complete successfully
- [ ] Release actions complete successfully
- [ ] Release announced to Trinsic Team. TODO: Add method/details 
- [ ] TODO: Add more?

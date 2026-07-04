# Contributing to FirstBoot

Thank you for your interest in contributing! FirstBoot is a community-driven project and all kinds of contributions are welcome — from adding new software entries, to improving the UI, to fixing bugs.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Adding a New Software Entry](#adding-a-new-software-entry)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Submitting Code](#submitting-code)
- [Development Setup](#development-setup)
- [Pull Request Guidelines](#pull-request-guidelines)

---

## Code of Conduct

Please be respectful and constructive. We follow a standard open-source code of conduct — harassment, discrimination, or toxic behavior of any kind will not be tolerated.

---

## How to Contribute

### Adding a New Software Entry

This is the easiest way to contribute! Software data lives in:

```
src/data/categories/<category>.json
```

Each entry follows this schema:

```json
{
  "id": "unique-software-id",
  "name": "Software Name",
  "description": "One-line description of what it does.",
  "category": "utilities",
  "tags": ["tag1", "tag2"],
  "officialUrl": "https://example.com/",
  "downloadPageUrl": "https://example.com/download",
  "logo": "https://example.com/logo.svg",
  "platforms": ["windows", "mac", "linux"],
  "license": "free | open-source | paid",
  "openSource": true,
  "featured": false
}
```

**Rules for entries:**
- `downloadPageUrl` must point to the **official** download page only — no mirrors, no third-party sites.
- `logo` must be a stable, publicly accessible URL (prefer SVGs).
- `description` should be a single sentence, under 100 characters.
- Only add software that is relevant to a fresh Windows setup.

### Reporting Bugs

Open a GitHub Issue with:
- A clear title
- Steps to reproduce
- Expected vs. actual behavior
- Browser/OS info

### Suggesting Features

Open a GitHub Issue with the label `enhancement`. Describe the use case and why it benefits the project.

### Submitting Code

1. Fork the repo and create a branch: `git checkout -b feat/my-feature`
2. Make your changes
3. Ensure the app builds: `npm run build`
4. Open a Pull Request against `main`

---

## Development Setup

```bash
# Clone the repo
git clone https://github.com/your-username/firstboot.git
cd firstboot

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR.
- Write a clear PR description explaining what changed and why.
- Make sure `npm run build` passes before submitting.
- For new software entries, verify all URLs are correct and working.
- Screenshots are appreciated for UI changes.

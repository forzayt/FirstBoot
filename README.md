<div align="center">

# 🚀 FirstBoot

**A fast, community-curated directory of essential Windows software.**  
Always links to official sources. No ads. No bloat. Open source.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Built with React](https://img.shields.io/badge/built%20with-React%2018-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)](https://vitejs.dev/)

</div>

---

## What is FirstBoot?

**FirstBoot** is a minimalist, open-source web app designed for one thing: helping you set up a fresh Windows installation quickly. It provides a searchable, categorized directory of essential software — every entry links directly to the official download page. No bloatware, no tracking, no sponsored results.

Inspired by the experience of reinstalling Windows and spending an hour hunting down official download links across the web.

---

## ✨ Features

- 🔍 **Instant search** across all software names, descriptions, and tags
- 📁 **7 categories** — Browsers, Development, Utilities, Communication, Gaming, Media, Drivers
- 🏷️ **License badges** — clearly shows Free, Open Source, or Paid
- 🔗 **Official links only** — every download points to the vendor's own site
- ⚡ **Static & fast** — no backend, no database, pure frontend
- 🌙 **Dark mode only** — clean developer-focused aesthetic
- 📱 **Fully responsive**

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Header.tsx         # Navigation and search bar
│   ├── Footer.tsx         # Footer with links
│   ├── SoftwareCard.tsx   # Individual software entry card
│   └── CategoryTabs.tsx   # Category filter tabs
├── pages/
│   ├── HomePage.tsx       # Landing page with featured software
│   └── ExplorePage.tsx    # Full browsable/searchable directory
├── data/
│   └── categories/
│       ├── browsers.json
│       ├── development.json
│       ├── utilities.json
│       ├── communication.json
│       ├── gaming.json
│       ├── media.json
│       └── drivers.json
└── types/                 # TypeScript type definitions
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/firstboot.git
cd firstboot

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local dev server |
| `npm run build` | Build for production (`dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [TypeScript 5](https://www.typescriptlang.org/) | Type safety |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS v3](https://tailwindcss.com/) | Styling |
| [Lucide React](https://lucide.dev/) | Icons |

---

## 🤝 Contributing

Contributions are warmly welcome! The most valuable thing you can do is **add missing software entries** or **fix broken links**.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide, including how to:
- Add a new software entry to a category JSON file
- Submit a bug report
- Propose a new feature
- Open a pull request

---

## 📋 Software Entry Schema

All software data lives in `src/data/categories/`. Each entry is a JSON object:

```json
{
  "id": "firefox",
  "name": "Mozilla Firefox",
  "description": "Open-source browser focused on privacy and user control.",
  "category": "browsers",
  "tags": ["browser", "privacy", "open-source"],
  "officialUrl": "https://www.mozilla.org/",
  "downloadPageUrl": "https://www.mozilla.org/en-US/firefox/new/",
  "logo": "https://...",
  "platforms": ["windows", "mac", "linux"],
  "license": "open-source",
  "openSource": true,
  "featured": true
}
```

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](./LICENSE) for full details.

The software data (JSON files) is provided for informational purposes. All trademarks, logos, and brand names belong to their respective owners.

---

## 🙏 Acknowledgements

- Inspired by [Ninite](https://ninite.com/) and the endless frustration of hunting official download links
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) + [React](https://react.dev/)

---

<div align="center">
Made with ❤️ for anyone who has ever reinstalled Windows
</div>

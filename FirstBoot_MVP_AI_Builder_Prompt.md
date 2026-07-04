# FirstBoot MVP --- AI Builder Prompt

Build a modern open-source frontend-only web application called
**FirstBoot** with the tagline **"Fresh Windows Install? Everything you
need is here."** The product solves one simple problem: after
reinstalling or resetting Windows, users should not have to search
across Google, fake download sites, vendor homepages, and deeply nested
support pages to find essential software; FirstBoot should provide a
clean, trusted, curated directory that sends users directly to the
**official software download page or official product page**, never
hosting installers, never using mirrors, and never linking to unofficial
download websites. Build the MVP using **React, Vite, TypeScript,
Tailwind CSS, React Router, and Lucide icons**, with absolutely **no
backend, no database, no authentication, no admin panel, no API server,
no Firebase, and no Supabase**. All software catalog content must be
stored as simple static JSON files organized by category, for example
`src/data/categories/browsers.json`, `development.json`, `gaming.json`,
`media.json`, `communication.json`, `utilities.json`, and
`drivers.json`, so future open-source contributors can add or update
software by editing JSON rather than React components. Each software
entry should support fields such as `id`, `name`, `description`,
`category`, `tags`, `officialUrl`, `downloadPageUrl`, `logo`,
`platforms`, `license`, and `openSource`, and the UI must automatically
render the catalog from these files.

The visual design is extremely important: create a **dark-mode-only,
minimalist, next-generation open-source interface** that does not look
like a common SaaS landing page, Bootstrap template, admin dashboard,
app-store clone, or generic grid of oversized rounded cards. Before
deciding the visual language, study contemporary interface concepts from
**Linear, Raycast, Vercel, GitHub, shadcn/ui, Mobbin, Godly, Awwwards,
and modern developer-tool websites** for inspiration in information
density, typography, command interfaces, subtle borders, navigation,
spacing, and interaction patterns, but **do not copy any website
directly**. Create an original visual identity for FirstBoot. Use a
near-black background, restrained neutral surfaces, crisp typography,
subtle 1px borders, compact spacing, minimal shadows, small radii,
excellent hierarchy, and one restrained accent color. Avoid excessive
gradients, glassmorphism, glowing neon effects, huge hero sections,
giant text, floating blobs, excessive animation, repetitive card
layouts, and unnecessary decorative elements. The interface should feel
fast, trustworthy, technical, curated, and premium, similar in spirit to
a serious open-source utility that experienced developers would star on
GitHub while remaining easy for ordinary Windows users.

Keep the MVP intentionally small. The home page should have a compact
sticky header with the **FirstBoot** wordmark, an **Explore** navigation
item, a prominent search trigger or search field, and a GitHub button.
The opening section should immediately show the tagline **"Fresh Windows
Install? Everything you need is here."** with one short supporting
sentence explaining that FirstBoot is a curated directory of essential
software with links to official sources. Do not waste vertical space on
a giant marketing hero. Below it, show a compact category navigation
system and a curated software discovery area. Categories for the MVP
should include **Browsers, Development, Gaming, Communication, Media,
Utilities, and Drivers**. Users must be able to search software
instantly by name, description, or tags and filter by category entirely
on the client side. Search should feel like a first-class feature and
may use a polished command-palette-inspired interaction on desktop with
a clean mobile equivalent.

Design software items as compact, information-rich components rather
than generic ecommerce cards. Each item should show the software logo,
name, concise one-line description, relevant tags, supported platform
indicators where useful, and a clear action such as **Official
Download**. Optionally provide a secondary **Official Website** action
when both URLs exist. External links must open safely in a new tab. Make
it visually obvious that links lead to official sources, but do not
claim that FirstBoot owns, distributes, verifies cryptographically, or
partners with the listed software unless that is actually true. Include
a small trust statement such as **"No mirrors. No bundled installers.
Official sources only."** The MVP should include realistic curated
entries for common Windows software such as major browsers, developer
tools, game launchers, communication apps, media tools, utilities, and
hardware driver portals, but all URLs must be structured as data and
easy to replace; do not fabricate partnerships or misleading
endorsements.

Create an **Explore** route at `/explore` that provides the complete
searchable catalog with category filtering and a polished empty state.
The home route `/` should focus on fast discovery and show selected
essentials or popular categories without becoming a marketing-heavy
landing page. A dedicated software detail page is **not required for the
MVP** unless it materially improves the experience; prefer simplicity.
Do not implement ratings, reviews, comments, user accounts, cloud sync,
payments, ads, AI recommendations, social features, installer hosting,
automatic downloads, package-manager automation, or community
submissions in this first version. Do not add features merely to make
the project appear larger.

Use a clean project architecture with reusable components and static
category data, for example `src/components`, `src/pages`,
`src/data/categories`, `src/types`, and `src/lib`. Create TypeScript
types for software and categories, a small catalog utility that merges
category JSON files into a searchable collection, and robust client-side
filtering. The project must be fully responsive at approximately
**375px, 768px, 1024px, and 1440px**, keyboard accessible, visually
polished, and deployable as a static site. Use semantic HTML, visible
focus states, accessible icon buttons, good contrast, and reduced-motion
awareness. Keep dependencies minimal and performance high.

The final result should feel like a distinct product rather than an
AI-generated template. Prioritize **original interface composition, fast
search, trustworthy official-source navigation, compact information
density, maintainable JSON content, dark minimalist aesthetics, and
open-source contribution friendliness**. The core MVP promise is simple:
**FirstBoot helps someone with a fresh Windows installation quickly find
the essential software they need and reach the correct official download
pages without repeatedly searching the web.**

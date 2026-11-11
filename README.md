# Fahri Maulana – Personal Portfolio

A personal portfolio website built with Next.js App Router, TypeScript (strict mode), and Tailwind CSS v4, matching the reference design in `desain.html` in layout, spacing, colors, and behavior.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with design tokens mapped to CSS variables
- **Typography:** Inter only (`400`, `500`, `600`) via `next/font/google`
- **Email Service:** [Resend](https://resend.com) with spam honeypot defense
- **Animations:** Pure CSS (two-ring counter-rotating orbit, infinite marquee track, reduced-motion overrides)
- **Navigation:** Floating sticky pill navbar with scroll-spy, hero transparency toggle, and mobile dropdown
- **SEO & Metadata:** Open Graph, Twitter Cards, Sitemap, and Robots

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or 20+
- npm

### 2. Installation
Clone the repository and install the dependencies:

```bash
cd portfolio
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Configure your credentials:
```env
# Required: Your Resend API key
RESEND_API_KEY=re_your_api_key_here

# Required: The destination email address for form submissions
CONTACT_TO_EMAIL=your.email@example.com

# Optional: Verified sender address (defaults to onboarding@resend.dev)
RESEND_FROM_EMAIL=onboarding@resend.dev
```

> **Note:** If `RESEND_API_KEY` or `CONTACT_TO_EMAIL` are missing, the contact form API gracefully returns a clear HTTP 503 error message without crashing.

### 4. Running Locally
Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Linting and Building
To check code quality and test production compilation:

```bash
npm run lint
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts   # Contact form submission endpoint (Resend + Honeypot)
│   ├── globals.css            # Design tokens, CSS variables, keyframes & responsive rules
│   ├── layout.tsx             # Root layout with Inter font, floating Navbar & SEO metadata
│   ├── opengraph-image.tsx    # Dynamic Open Graph image generated with next/og
│   ├── page.tsx               # Main single-page application composing all sections
│   ├── projects/
│   │   └── page.tsx           # All projects archive page with category tabs
│   ├── robots.ts              # Search engine crawler instructions
│   └── sitemap.ts             # Dynamic sitemap generator
├── components/
│   ├── Navbar.tsx             # Shared floating sticky pill navbar with scroll-spy & mobile menu
│   ├── ProjectTabs.tsx        # Accessible tablist for filtering project categories
│   ├── ProjectsView.tsx       # Projects listing, category views, and empty state
│   ├── sections/              # Server components for each page section:
│   │   ├── Hero.tsx           # Hero with headline, lead, chips, portrait
│   │   ├── About.tsx          # Expanded about with 2-column story, facts, CV download & principles
│   │   ├── Education.tsx      # Vertical education timeline with in-progress deep card
│   │   ├── Process.tsx        # Four unnumbered process cards
│   │   ├── Services.tsx       # Four-row services list
│   │   ├── Work.tsx           # Featured website project showcase cards + View all projects CTA
│   │   ├── Journey.tsx        # Timeline cards with deep-brown "Now" card
│   │   ├── Skills.tsx         # Categories + pure CSS Orbit + Marquee
│   │   ├── Contact.tsx        # Contact details & social links
│   │   └── Footer.tsx         # Semantic footer
│   ├── ui/                    # Reusable UI primitives:
│   │   ├── Button.tsx         # Pill button supporting solid & ghost variants
│   │   ├── Pill.tsx           # Tag/chip element
│   │   └── SectionHead.tsx    # Standardized section headings
│   ├── ContactForm.tsx        # Interactive client component (state, validation, feedback)
│   ├── Marquee.tsx            # Seamless infinite scrolling tool badge track
│   └── Orbit.tsx              # Pure CSS dual-ring orbit with counter-rotating badges
├── data/                      # Typed data modules for easy editing:
│   ├── about.ts               # Bio story, portrait, principles, quick facts, stats
│   ├── education.ts           # Academic timeline entries and highlights
│   ├── journey.ts             # Career timeline entries
│   ├── projects.ts            # Projects data with slugs, website/design categories, and tags
│   ├── services.ts            # Services offerings list
│   ├── site.ts                # Site metadata, nav items, hero copy, contact details
│   └── tools.ts               # Tools list, orbit rings, monograms, marquee tools
└── public/
    └── cv.pdf                 # Curriculum Vitae download document
```

---

## ✏️ How to Edit Content in `data/`

All copy and items are kept in typed data files rather than hardcoded in JSX:

### 1. Site Info & Nav Links (`data/site.ts`)
- Update `name`, `role`, `url`, and `description`.
- Modify `navItems` and `navCta` to adjust navigation links.
- Update `hero` text, CTAs, and quick pills.
- Edit `contact.items` to change email, WhatsApp number, location, and availability note.
- Edit `contact.socials` to link your active profiles.

### 2. Expanded About & Bio (`data/about.ts`)
- `paragraphs`: Personal narrative story shown on the left column.
- `portrait`: Configure optional `image` or gradient colors and tags.
- `quickFacts`: Key information rows (Location, Focus, Status, Languages).
- `principles`: "How I work" principle cards (e.g., "Clarity first", "Built to last", "Details matter").
- `stats`: 4-column metric highlights (Projects shipped, Technologies, Current target, Direct collaboration).

### 3. Education Timeline (`data/education.ts`)
- Add or edit education items (`institution`, `program`, `level`, `period`, `status`, `description`, `highlights`).
- Setting `status: "in-progress"` styles the card with the standout deep-brown theme.

### 4. Projects & Work (`data/projects.ts`)
- `slug`: Unique identifier for each project.
- `category`: `"website"` or `"design"`.
- `featured`: Set to `true` to display the project on the home page (max 3 website projects).
- All projects (both website and design) are showcased on `/projects` with filterable tabs (`All`, `Website`, `Design`).
- **Adding Real Images:** Supply an optional `image` object:
  ```ts
  image: {
    src: "/projects/omah-vector.webp",
    alt: "OMAH VECTOR Studio Platform",
  }
  ```

### 5. Tools, Orbit & Marquee (`data/tools.ts`)
- **Orbit Rings:** Add tools to `orbitTools` with `{ name, label, color, textColor, monogram, ring, angle }`:
  - Ring 1 = inner ring (`r: 0.22`, 34s duration)
  - Ring 2 = outer ring (`r: 0.40`, 60s duration)
- **Marquee:** Add or adjust tools in `marqueeTools` with `{ name, color }`. The marquee component automatically duplicates the list for a continuous loop.

---

## ♿ Accessibility & Motion

- **Sticky Navbar:** Smooth transition (200ms) from transparent over the hero to blurred card backdrop on scroll. Highlights current active section via scroll-spy. Mobile hamburger menu provides an accessible dropdown with `aria-expanded`, `aria-controls`, and keyboard navigation (`Escape` closes the menu).
- **Reduced Motion:** If `prefers-reduced-motion: reduce` is enabled on the client system, all orbital rotations, marquee scrolls, and button transitions are disabled.
- **Touch-Friendly Marquee:** Hover pause is scoped to devices supporting hover (`@media (hover: hover)`), avoiding stuck animations on touch screens.
- **Focus Rings:** Distinct 2px amber outline (`:focus-visible`) for keyboard navigation.
- **Section Anchors:** `scroll-padding-top: 104px` ensures that sections navigated via hash anchors are never obscured by the fixed navbar.

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com) and click **"Add New..."** -> **"Project"**.
3. Import your repository and select the `portfolio` directory as the Root Directory.
4. Framework Preset will be automatically detected as **Next.js**.
5. Under **Environment Variables**, configure:
   - `RESEND_API_KEY`: Your Resend production API key
   - `CONTACT_TO_EMAIL`: Destination email address
   - `RESEND_FROM_EMAIL`: Verified sending domain or `onboarding@resend.dev`
6. Click **Deploy**. Vercel will run `npm run build` and publish your site globally with edge optimization and automatic SSL.

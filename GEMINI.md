# EBWater Website — Project Context & Documentation

## About the Project

**EBWater** is a specialist independent water safety and biological risk consultancy targeting healthcare premises and complex water systems, founded and led by Elaine Baxter. The website is located at `www.ebwater.co.uk`.

The site is **LIVE** in production on GitHub Pages (custom domain via `CNAME` with HTTPS enabled).

- **Live URL**: [https://www.ebwater.co.uk](https://www.ebwater.co.uk)
- **Repository**: `https://github.com/elaine287/EBWaterWebsite.git` (branch `main`)
- **Key Contact**: Elaine Baxter — `elaine@ebwater.co.uk` | `07771 784384`

---

## Technology Stack & Architecture

| Layer | Technology | Details |
|---|---|---|
| Markup | HTML5 | Plain `.html` files, semantic elements, no build step required |
| Styling | CSS3 (`css/styles.css`) | Custom CSS custom properties (variables), Flexbox, CSS Grid |
| Font | Inter (Google Fonts) | Weights 400, 500, 600, 700, 800 |
| Icons | Inline SVG & Brand Droplet | Custom jigsaw water droplet icon (`LogoMainNoText.jpg`, `assets/icons/logo.svg`) |
| JavaScript | Vanilla JS (`js/main.js`) | Mobile navigation drawer, scroll reveal animations, sticky header effects |
| Production Form API | Web3Forms | Client-side AJAX submission to `https://api.web3forms.com/submit` delivering directly to `elaine@ebwater.co.uk` |
| Local Dev Server | Node.js + Express 5 (`server.js`) | Local static server + Nodemailer SMTP form handler |
| Hosting | GitHub Pages | Static hosting with custom domain (`CNAME`) and `.nojekyll` bypass file |
| SEO | `sitemap.xml` & `robots.txt` | Search engine crawl and index configuration |

### Form Handling in Production vs Development
- **Production (GitHub Pages)**:
  - Form on `contact.html` submits via `fetch()` to **Web3Forms** (`https://api.web3forms.com/submit`) using access key `82c4b28c-262d-465f-8fa1-db9730520764`.
  - Notifications are delivered immediately to `elaine@ebwater.co.uk`.
  - On successful submission, a branded, accessible modal popup appears addressing the submitter by name: *"Thank you, [Name]! Your enquiry has been sent successfully. We will be in touch shortly."*
- **Local Development (`server.js`)**:
  - Express server with Nodemailer configured via `.env` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`).
  - Endpoints: `POST /api/submit-enquiry` and `POST /api/submit-consultation`.

---

## File Structure

```
EBWWebsite/
├── .gitignore          # Excludes node_modules, .env, .aider*, scratch scripts
├── .nojekyll           # Critical: bypasses Jekyll processing on GitHub Pages
├── CNAME               # Custom domain configuration (www.ebwater.co.uk)
├── GEMINI.md           # Project context and developer guidelines
├── memory.md           # Architecture analysis and persistent AI memory
├── package.json        # Node project metadata and dependencies
├── package-lock.json   # Node dependency lockfile
├── server.js           # Express backend (local dev server & Nodemailer fallback)
├── robots.txt          # SEO crawler rules
├── sitemap.xml         # XML sitemap
│
├── index.html          # LIVE public homepage
├── dev-index.html      # Staging / reference copy of homepage
├── about.html          # About EBWater (biography, values, 2x2 experience grid)
├── services.html       # Services listing & independence statement
├── contact.html        # Contact page with Web3Forms enquiry form & success modal
├── consultation.html   # Immediate redirect (meta refresh) to contact.html
│
├── css/
│   └── styles.css      # Master global stylesheet with design system tokens
│
├── js/
│   └── main.js         # Core site JS: navigation, scroll reveals, sticky header
│
└── assets/
    ├── icons/
    │   └── logo.svg    # Vector droplet logo
    ├── images/
    ├── LogoMain.jpg    # Full landscape brand logo with wordmark
    └── LogoMainNoText.jpg # Water droplet icon (used in header & footer with 3D bezel effect)
```

---

## Design System (CSS Custom Properties)

All design tokens are defined in `:root` in `css/styles.css`.

### Colour Palette
| Variable | Value | Usage |
|---|---|---|
| `--color-navy` | `#1A3A5A` | Primary brand colour, headings, footer background, dark buttons |
| `--color-teal` | `#007080` | Accent colour, primary CTA buttons, active links, borders |
| `--color-mint` | `#70C0A0` | Secondary accent, badges, subtle highlights, hover states |
| `--color-bg-light` | `#EEF5F5` | Hero section and light section backgrounds |
| `--color-white` | `#FFFFFF` | Card backgrounds, pure white elements |
| `--color-neutral-1` | `#F7FAFA` | Page body background |
| `--color-neutral-2` | `#E7EEEE` | Borders, subtle dividers |
| `--color-text-dark` | `#1F2933` | Primary body text |
| `--color-text-light` | `#52616B` | Secondary/muted body text |

### Typography & Spacing
- **Font Family**: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Border Radius**: `12px`
- **Shadows**:
  - Subtly raised cards: `0 4px 20px rgba(26, 58, 90, 0.05)`
  - Hover state lift: `0 12px 30px rgba(26, 58, 90, 0.1)`
- **Spacing Scale**:
  - `--spacing-xs`: `0.5rem`
  - `--spacing-sm`: `1rem`
  - `--spacing-md`: `2rem`
  - `--spacing-lg`: `4rem`
  - `--spacing-xl`: `6rem`

---

## Page Architecture & Layout Conventions

### Shared Header
- Sticky header (`.site-header`) with brand logo and navigation menu.
- Nav links: **Home** (`index.html`), **About** (`about.html`), **Services** (`services.html`), **Contact** (`contact.html`).
- CTA Button: **"Request a Consultation"** (`contact.html` with `.btn` class).
- Mobile navigation: Toggle button (`.mobile-menu-btn`) with `aria-expanded` and responsive slide-down menu.

### Shared Footer
- 3-column grid structure:
  1. **Brand column**: Droplet logo (styled with subtle 3D bezel shadow for dark contrast), "Healthcare water safety advice" tagline, and key mission statement.
  2. **Navigation column**: Links to Home, About, Services, Contact, and Consultation.
  3. **Services column**: Biological Risk Audits, Water Safety Plans, Authorising Engineer (AE), Legionella & Pseudomonas Risk Management, Water Safety Governance.
- Bottom sub-bar with copyright notice, Privacy Policy, and Terms links.

### Pages Summary
1. **`index.html` (Homepage)**:
   - Hero banner with headline *"Water safety governance and compliance for healthcare premises."*, strapline, dual CTA buttons ("Explore Services", "Request a Consultation"), and landscape brand visual.
   - Overlapping service preview cards (Biological Risk Audits, Water Safety Plans, Authorising Engineer).
   - Introduction to independent water safety governance.
   - Core value proposition grid (Healthcare Specialism, Authorising Engineer Services, Independent Governance, End-to-End Support).
2. **`about.html` (About)**:
   - Header with strapline *"Specialist water safety governance led by 25+ years of microbiology and healthcare estates experience."*
   - Elaine Baxter biography and credential overview.
   - Core values (Independence, Evidence, Clarity, Safety, Accountability, Partnership).
   - 2x2 grid highlighting Strategic Governance & Water Safety Groups, Key Experience Areas, Independent Auditing & Risk Assessment, and Policy, Training & Competency.
3. **`services.html` (Services)**:
   - Header banner with strapline *"Independent, evidence-based water safety governance, audits, and Authorising Engineer services on water and wastewater for hospitals and healthcare estates."*
   - Detailed service grid: Biological Risk Audits, Water Safety Plan (WSP) Development, Authorising Engineer (AE) Services, Legionella Risk Management, Pseudomonas Risk Management, Water Safety Governance, Training & Competency, Policy & Procedure Development.
   - Explicit Independence Statement card emphasizing total freedom from chemical, equipment, and remedial supply conflicts.
4. **`contact.html` (Contact & Enquiries)**:
   - Contact details card: Email (`elaine@ebwater.co.uk`), Phone (`07771 784384`), Location (`United Kingdom`).
   - Interactive contact form sending via Web3Forms with client-side validation and personalized confirmation modal.
5. **`consultation.html`**:
   - Meta-refresh redirect pointing directly to `contact.html`.

---

## Important Deployment Guidelines

1. **GitHub Pages & `.nojekyll`**:
   - GitHub Pages runs a Jekyll build step by default. Because files with underscores, special characters, or certain markdown structures cause Jekyll builds to fail, the **`.nojekyll`** file at repository root MUST be maintained.
2. **Form Submissions**:
   - Because GitHub Pages is purely static, all production forms must use client-side delivery (such as Web3Forms) rather than relative `/api/*` endpoints.
   - Web3Forms access key is configured directly in the `contact.html` payload.
3. **Domain & DNS**:
   - Custom domain `www.ebwater.co.uk` is bound via the `CNAME` file.
   - Enforce HTTPS is enabled in GitHub Pages settings.

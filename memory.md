# EBWater Website Architecture & Codebase Analysis

## 1. Overview & Technology Stack

The EBWater website is a corporate presence for an independent water safety governance and biological risk consultancy specializing in healthcare and complex premises.

* **Frontend**: Pure semantic **HTML5**, modern **CSS3** (custom CSS variables, responsive Flexbox and CSS Grid), and lightweight **Vanilla JavaScript**. No heavy frontend frameworks or build tools are required, ensuring zero build overhead, fast loading times, and easy maintainability.
* **Backend**: **Node.js** with an **Express 5** server ([`server.js`](file:///C:/Users/Elaine/EBWWebsite/server.js)):
  * Serves static HTML, CSS, JavaScript, and image assets from the project directory.
  * Middleware includes `body-parser` (URL-encoded and JSON) and `dotenv` for environment configuration.
  * Integrates **Nodemailer** to handle email delivery for enquiries and consultations.
* **Typography**: Google Font **Inter** (`wght@400;500;600;700;800`).

---

## 2. Brand Identity & Design System

The visual design is grounded in the brand specification found in [`5f450983-03f3-4c6a-b090-3bf05086417a.jpg`](file:///C:/Users/Elaine/EBWWebsite/5f450983-03f3-4c6a-b090-3bf05086417a.jpg):

### Color Palette
Defined as CSS custom properties in [`css/styles.css`](file:///C:/Users/Elaine/EBWWebsite/css/styles.css):
* **Navy (`--color-navy`: `#1A3A5A`)**: Primary header typography, high-contrast headings, and dark footer backgrounds.
* **Teal (`--color-teal`: `#007080`)**: Primary accent color used for CTA buttons, active navigation links, borders, and key graphical accents.
* **Mint (`--color-mint`: `#70C0A0`)**: Secondary accent color for sub-details, borders, and hover states.
* **Neutrals**:
  * Light Backgrounds: `--color-bg-light` (`#EEF5F5`), `--color-neutral-1` (`#F7FAFA`)
  * Border / Dividers: `--color-neutral-2` (`#E7EEEE`)
  * Text: Dark text `--color-text-dark` (`#1F2933`), muted text `--color-text-light` (`#52616B`)
  * Pure White: `--color-white` (`#FFFFFF`)

### Brand Imagery & Logos
* **Master Full Logo**: [`EBWaterLogo.jpg`](file:///C:/Users/Elaine/EBWWebsite/EBWaterLogo.jpg) (2816×1536 px) — High-resolution centered logo featuring the interlocking jigsaw water droplet icon, the "EBWater" wordmark, and the subtitle *"WATER SAFETY & BIOLOGICAL RISK CONSULTANTS"*.
* **Square Icon**: [`assets/images/EBWaterLogoSquare.jpg`](file:///C:/Users/Elaine/EBWWebsite/assets/images/EBWaterLogoSquare.jpg) (1100×1100 px) — Isolated jigsaw droplet emblem.
* **Vector Icon**: [`assets/icons/logo.svg`](file:///C:/Users/Elaine/EBWWebsite/assets/icons/logo.svg) — SVG vector version of the jigsaw water droplet.

---

## 3. Directory & File Structure

All files reside directly in `C:\Users\Elaine\EBWWebsite\` (the nested folder was removed).

```text
C:\Users\Elaine\EBWWebsite\
├── memory.md                          # Codebase analysis & project memory
├── .gitignore                         # Ignores node_modules/ and .env
├── package.json                       # Project metadata and dependencies
├── package-lock.json                  # Dependency lockfile
├── server.js                          # Express backend & Nodemailer integration
├── 5f450983-03f3-4c6a-b090-...jpg     # Original website mockup & concept sheet
├── EBWaterLogo.jpg                    # High-resolution full landscape brand logo
├── index.html                         # Holding / Coming Soon page (minimal layout with just "Website coming soon")
├── dev-index.html                     # Full homepage (ready for public launch)
├── about.html                         # About EBWater (approach, mission, values, process)
├── services.html                      # Service offerings & details
├── consultation.html                  # Dedicated consultation request form
├── contact.html                       # General contact page & enquiry form
├── blog.html                          # Resources and insights articles
├── assets\
│   ├── icons\
│   │   └── logo.svg                   # Vector droplet logo
│   └── images\
│       └── EBWaterLogoSquare.jpg      # Square cropped droplet logo
├── css\
│   └── styles.css                     # Master site stylesheet
└── js\
    └── main.js                        # Mobile navigation toggle & scroll animations
```

---

## 4. Backend Endpoints & Integrations ([`server.js`](file:///C:/Users/Elaine/EBWWebsite/server.js))

The server listens on `process.env.PORT || 3000` and configures SMTP credentials via environment variables:
* `SMTP_HOST`
* `SMTP_PORT`
* `SMTP_SECURE` (`true` for port 465)
* `SMTP_USER`
* `SMTP_PASS`

### Endpoints
1. `POST /api/submit-enquiry`:
   * **Source**: Contact form on [`contact.html`](file:///C:/Users/Elaine/EBWWebsite/contact.html).
   * **Payload**: `name`, `organisation`, `email`, `phone`, `enquiry`, `message`.
   * **Recipient**: `elaine@ebwater.co.uk`.
2. `POST /api/submit-consultation`:
   * **Source**: Consultation request form on [`consultation.html`](file:///C:/Users/Elaine/EBWWebsite/consultation.html).
   * **Payload**: `name`, `organisation`, `email`, `phone`, `role`, `service`, `premises`, `message`.
   * **Recipient**: `elaine@ebwater.co.uk`.

---

## 5. Frontend Scripts & Styles

* **Interactive Elements** ([`js/main.js`](file:///C:/Users/Elaine/EBWWebsite/js/main.js)):
  * **Mobile Menu**: Handles clicking `.mobile-menu-btn` to toggle `.nav-links.active` and update `aria-expanded`.
  * **Scroll Reveal**: Adds `.active` class to `.reveal` elements when scrolled into view.
  * **Sticky Header Scroll Effect**: Adjusts padding and shadow on `.site-header` when scrolled down > 50px.
* **Layouts & Responsiveness** ([`css/styles.css`](file:///C:/Users/Elaine/EBWWebsite/css/styles.css)):
  * Standard breakpoints at `1024px` and `768px`.
  * Responsive navigation converts to a mobile dropdown drawer on screens under 768px.
  * Card grids (`.grid-3`, `.grid-2`, `.service-cards`) adapt smoothly from multi-column to single-column on smaller screens.

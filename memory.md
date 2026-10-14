# EBWater Website Architecture & Codebase Analysis

## 1. Overview & Technology Stack

The EBWater website is the official corporate web presence for **EBWater**, an independent water safety governance and biological risk consultancy specializing in healthcare premises and complex water systems, founded and directed by Elaine Baxter.

* **Live Production Site**: [https://www.ebwater.co.uk](https://www.ebwater.co.uk)
* **Hosting**: **GitHub Pages** (via custom domain `CNAME` and SSL/HTTPS enforced).
* **Frontend**: Pure semantic **HTML5**, modern **CSS3** (custom CSS custom properties, responsive Flexbox and CSS Grid), and lightweight **Vanilla JavaScript**. No heavy frontend frameworks or build steps are required, ensuring zero build overhead, near-instant load times, and effortless long-term maintainability.
* **Production Forms & Email**: Client-side submission to **Web3Forms** (`https://api.web3forms.com/submit`) on `contact.html` with access key `82c4b28c-262d-465f-8fa1-db9730520764`. Submissions are routed directly to `elaine@ebwater.co.uk`.
* **Local Development Backend**: **Node.js** with an **Express 5** server (`server.js`):
  * Serves static HTML, CSS, JavaScript, and image assets from the project directory.
  * Middleware includes `body-parser` (URL-encoded and JSON) and `dotenv` for environment configuration.
  * Integrates **Nodemailer** to handle email delivery for enquiries and consultations when testing locally.
* **Typography**: Google Font **Inter** (`wght@400;500;600;700;800`).
* **SEO**: Standard `sitemap.xml` and `robots.txt` are included for search engine ingestion.

---

## 2. Brand Identity & Design System

The visual design is grounded in the brand specification found in `5f450983-03f3-4c6a-b090-3bf05086417a.jpg`:

### Color Palette
Defined as CSS custom properties in `css/styles.css`:
* **Navy (`--color-navy`: `#1A3A5A`)**: Primary header typography, high-contrast headings, and dark footer backgrounds.
* **Teal (`--color-teal`: `#007080`)**: Primary accent color used for CTA buttons, active navigation links, borders, and key graphical accents.
* **Mint (`--color-mint`: `#70C0A0`)**: Secondary accent color for sub-details, borders, and hover states.
* **Neutrals**:
  * Light Backgrounds: `--color-bg-light` (`#EEF5F5`), `--color-neutral-1` (`#F7FAFA`)
  * Border / Dividers: `--color-neutral-2` (`#E7EEEE`)
  * Text: Dark text `--color-text-dark` (`#1F2933`), muted text `--color-text-light` (`#52616B`)
  * Pure White: `--color-white` (`#FFFFFF`)

### Brand Imagery & Logos
* **Master Full Logo**: `LogoMain.jpg` - High-resolution centered logo featuring the interlocking jigsaw water droplet icon and the "EBWater" wordmark. Used as the main hero visual.
* **Header / Footer Logo**: `LogoMainNoText.jpg` - Droplet icon used in navigation headers and footers. In the footer, it features a 3D bezel/shadow effect to seamlessly pop against the dark navy background without harsh edges.
* **Vector Icon**: `assets/icons/logo.svg` - SVG vector version of the jigsaw water droplet.

---

## 3. Directory & File Structure

All files reside directly in `C:\Users\Elaine\EBWWebsite\`.

```text
C:\Users\Elaine\EBWWebsite\
├── .gitignore                         # Ignores node_modules/, .env, scratch files
├── .nojekyll                          # Required: bypasses Jekyll processing on GitHub Pages
├── CNAME                              # Custom domain configuration (www.ebwater.co.uk)
├── GEMINI.md                          # Project context & developer guidelines
├── memory.md                          # Codebase analysis & project memory
├── package.json                       # Project metadata and dependencies
├── package-lock.json                  # Dependency lockfile
├── server.js                          # Express backend & Nodemailer integration (local dev)
├── robots.txt                         # Search Engine Optimization crawler rules
├── sitemap.xml                        # Search Engine Optimization sitemap
├── LogoMain.jpg                       # High-resolution full landscape brand logo
├── LogoMainNoText.jpg                 # Water droplet icon logo (header & footer)
├── index.html                         # LIVE public homepage
├── dev-index.html                     # Full homepage development/staging copy
├── about.html                         # About EBWater (Elaine Baxter biography & 2x2 experience grid)
├── services.html                      # Service offerings grid & Independence Statement
├── contact.html                       # General contact page & Web3Forms enquiry form with modal popup
├── consultation.html                  # Immediate redirect (meta refresh) to contact.html
├── assets/
│   ├── icons/
│   │   └── logo.svg                   # Vector droplet logo
│   └── images/
├── css/
│   └── styles.css                     # Master site stylesheet
└── js/
    └── main.js                        # Mobile navigation toggle & scroll animations
```

---

## 4. Form Handling & Communication

### Production (Live on GitHub Pages)
* **Form Action**: Handled via client-side JavaScript on `contact.html`.
* **Provider**: **Web3Forms** (`https://api.web3forms.com/submit`).
* **Access Key**: `82c4b28c-262d-465f-8fa1-db9730520764`.
* **Destination**: Direct forwarding to `elaine@ebwater.co.uk`.
* **UX Feedback**: Rather than a basic alert, a custom-styled accessible modal popup (`#successModal`) is presented to the user, displaying a personalized message:
  > *"Thank you, [Name]! Your enquiry has been sent successfully. We will be in touch shortly."*
  Includes an "OK" button, a top-right close `&times;` button, backdrop click dismissal, and escape key listener.

### Local Development (`server.js`)
* Configured to listen on `process.env.PORT || 3000`.
* Reads SMTP credentials from `.env`:
  * `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`.
* Endpoints:
  1. `POST /api/submit-enquiry` (Source: `contact.html` when using local API).
  2. `POST /api/submit-consultation` (Source: `consultation.html` if restored from redirect).

---

## 5. Frontend Scripts & Styles

* **Interactive Elements** (`js/main.js`):
  * **Mobile Menu**: Toggles `.nav-links.active` and updates `aria-expanded` on `.mobile-menu-btn`.
  * **Scroll Reveal**: Adds `.active` class to `.reveal` elements when scrolled into view.
  * **Sticky Header Scroll Effect**: Adjusts padding and shadow on `.site-header` when scrolled down > 50px.
* **Layouts & Responsiveness** (`css/styles.css`):
  * Standard breakpoints at `1024px` and `768px`.
  * The footer uses a clean 3-column grid structure (Brand, Navigation, Services).
  * Navigation is clean and concise: Home, About, Services, Contact, and "Request a Consultation" CTA button.
  * Page headers (`.page-header`) use a refined `4.2rem` padding height for a streamlined look.

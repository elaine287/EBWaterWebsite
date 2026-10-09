# EBWater Website Architecture & Codebase Analysis

## 1. Overview & Technology Stack

The EBWater website is a corporate presence for an independent water safety governance consultancy specializing in healthcare premises.

* **Frontend**: Pure semantic **HTML5**, modern **CSS3** (custom CSS variables, responsive Flexbox and CSS Grid), and lightweight **Vanilla JavaScript**. No heavy frontend frameworks or build tools are required, ensuring zero build overhead, fast loading times, and easy maintainability.
* **Backend**: **Node.js** with an **Express 5** server ([\server.js\](file:///C:/Users/Elaine/EBWWebsite/server.js)):
  * Serves static HTML, CSS, JavaScript, and image assets from the project directory.
  * Middleware includes \ody-parser\ (URL-encoded and JSON) and \dotenv\ for environment configuration.
  * Integrates **Nodemailer** to handle email delivery for enquiries and consultations.
* **Typography**: Google Font **Inter** (\wght@400;500;600;700;800\).
* **SEO**: Standard \sitemap.xml\ and \obots.txt\ are included for search engine ingestion.

---

## 2. Brand Identity & Design System

The visual design is grounded in the brand specification found in [\5f450983-03f3-4c6a-b090-3bf05086417a.jpg\](file:///C:/Users/Elaine/EBWWebsite/5f450983-03f3-4c6a-b090-3bf05086417a.jpg):

### Color Palette
Defined as CSS custom properties in [\css/styles.css\](file:///C:/Users/Elaine/EBWWebsite/css/styles.css):
* **Navy (\--color-navy\: \#1A3A5A\)**: Primary header typography, high-contrast headings, and dark footer backgrounds.
* **Teal (\--color-teal\: \#007080\)**: Primary accent color used for CTA buttons, active navigation links, borders, and key graphical accents.
* **Mint (\--color-mint\: \#70C0A0\)**: Secondary accent color for sub-details, borders, and hover states.
* **Neutrals**:
  * Light Backgrounds: \--color-bg-light\ (\#EEF5F5\), \--color-neutral-1\ (\#F7FAFA\)
  * Border / Dividers: \--color-neutral-2\ (\#E7EEEE\)
  * Text: Dark text \--color-text-dark\ (\#1F2933\), muted text \--color-text-light\ (\#52616B\)
  * Pure White: \--color-white\ (\#FFFFFF\)

### Brand Imagery & Logos
* **Master Full Logo**: [\LogoMain.jpg\](file:///C:/Users/Elaine/EBWWebsite/LogoMain.jpg) - High-resolution centered logo featuring the interlocking jigsaw water droplet icon and the "EBWater" wordmark. Used as the main hero visual.
* **Header / Footer Logo**: [\LogoMainNoText.jpg\](file:///C:/Users/Elaine/EBWWebsite/LogoMainNoText.jpg) - Droplet icon used in navigation headers and footers. In the footer, it features a 3D bezel/shadow effect to seamlessly pop against the dark navy background without harsh edges.
* **Vector Icon**: [\ssets/icons/logo.svg\](file:///C:/Users/Elaine/EBWWebsite/assets/icons/logo.svg) - SVG vector version of the jigsaw water droplet.

---

## 3. Directory & File Structure

All files reside directly in \C:\Users\Elaine\EBWWebsite\\.

\\\	ext
C:\Users\Elaine\EBWWebsite\
+-- memory.md                          # Codebase analysis & project memory
+-- sitemap.xml & robots.txt           # Search Engine Optimization files
+-- .gitignore                         # Ignores node_modules/ and .env
+-- package.json                       # Project metadata and dependencies
+-- package-lock.json                  # Dependency lockfile
+-- server.js                          # Express backend & Nodemailer integration
+-- LogoMain.jpg                       # High-resolution full landscape brand logo
+-- index.html                         # Holding / Coming Soon page (minimal layout with just "Website coming soon")
+-- dev-index.html                     # Full homepage (ready for public launch)
+-- about.html                         # About EBWater (Elaine Baxter biography arranged in a clean 2x2 grid)
+-- services.html                      # Service offerings (Grid layout with Risk Audits, WSP, etc.) & Independence Statement
+-- consultation.html                  # Dedicated consultation request form
+-- contact.html                       # General contact page & enquiry form
+-- assets\
¦   +-- icons\
¦   ¦   +-- logo.svg                   # Vector droplet logo
¦   +-- images\
+-- css\
¦   +-- styles.css                     # Master site stylesheet
+-- js\
    +-- main.js                        # Mobile navigation toggle & scroll animations
\\\

---

## 4. Backend Endpoints & Integrations ([\server.js\](file:///C:/Users/Elaine/EBWWebsite/server.js))

The server listens on \process.env.PORT || 3000\ and configures SMTP credentials via environment variables:
* \SMTP_HOST\
* \SMTP_PORT\
* \SMTP_SECURE\ (\	rue\ for port 465)
* \SMTP_USER\
* \SMTP_PASS\

**Note on Hosting**: The site is currently setup to work with a Node.js backend. If hosted on a static host like GitHub Pages, the form submission to \server.js\ endpoints will fail, requiring an alternative such as Web3Forms, Formspree, or moving to a Node-capable host.

### Endpoints
1. \POST /api/submit-enquiry\:
   * **Source**: Contact form on [\contact.html\](file:///C:/Users/Elaine/EBWWebsite/contact.html).
   * **Payload**: \
ame\, \organisation\, \email\, \phone\, \enquiry\, \message\.
   * **Recipient**: \elaine@ebwater.co.uk\.
2. \POST /api/submit-consultation\:
   * **Source**: Consultation request form on [\consultation.html\](file:///C:/Users/Elaine/EBWWebsite/consultation.html).
   * **Payload**: \
ame\, \organisation\, \email\, \phone\, \ole\, \service\, \premises\, \message\.
   * **Recipient**: \elaine@ebwater.co.uk\.

---

## 5. Frontend Scripts & Styles

* **Interactive Elements** ([\js/main.js\](file:///C:/Users/Elaine/EBWWebsite/js/main.js)):
  * **Mobile Menu**: Handles clicking \.mobile-menu-btn\ (uses \&#9776;\ hamburger icon) to toggle \.nav-links.active\ and update \ria-expanded\.
  * **Scroll Reveal**: Adds \.active\ class to \.reveal\ elements when scrolled into view.
  * **Sticky Header Scroll Effect**: Adjusts padding and shadow on \.site-header\ when scrolled down > 50px.
* **Layouts & Responsiveness** ([\css/styles.css\](file:///C:/Users/Elaine/EBWWebsite/css/styles.css)):
  * Standard breakpoints at \1024px\ and \768px\.
  * The footer uses a clean 3-column grid structure (Brand, Navigation, Services).
  * Responsive navigation converts to a mobile dropdown drawer on screens under 768px.
  * Page headers (\.page-header\) use a refined \4.2rem\ padding height for a streamlined look.

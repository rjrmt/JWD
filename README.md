# JWD — Just Wright Defense

Mobile-first marketing site for **Just Wright Defense** — personal firearm safety training in South Florida.

## Stack

- Static HTML + shared CSS/JS
- [Vite](https://vitejs.dev/) for dev server and production builds

## Project structure

```
├── index.html              # Home
├── register.html           # Enrollment
├── what-to-bring.html      # Class prep
├── shop.html               # Merch
├── css/styles.css          # Shared styles
├── js/main.js              # Shared scripts
├── js/config.js            # Formspree ID + site URL
├── public/                 # Copied to site root (favicon, SEO)
│   ├── favicon.ico
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   └── sitemap.xml
├── assets/
│   ├── brand/              # Logos
│   ├── people/             # Instructor photography
│   ├── merch/              # Shop product images
│   └── services/           # Course / page hero images
└── source/                 # Original client files (not used in build)
```

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Output is written to `dist/` for deployment (e.g. Vercel).

## Formspree (enrollment form)

The register page submits to [Formspree](https://formspree.io). To activate it:

1. Create a free form at [formspree.io](https://formspree.io) using **Info@justwrightdefense.com**
2. Copy your form ID (the segment after `/f/` in the form endpoint URL)
3. Paste it in `js/config.js`:

```js
export const JWD_CONFIG = {
  formspreeEnrollId: 'your_form_id_here',
  siteUrl: 'https://justwrightdefense.com',
};
```

4. Redeploy. Submissions will email Quenton with name, phone, email, course, experience, and message.

Until the ID is set, the form shows a fallback message with phone and email.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Register | `register.html` |
| What to Bring | `what-to-bring.html` |
| Shop | `shop.html` |

## Naming conventions

- **HTML / JS / CSS:** kebab-case (`what-to-bring.html`, `main.js`)
- **Assets:** kebab-case, grouped by type under `assets/`
- **Source files:** archived in `source/` with descriptive kebab-case names

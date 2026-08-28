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

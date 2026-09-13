# Hein Htet — Portfolio

A simple, fast, mobile-responsive personal portfolio site built with React + Vite + Tailwind CSS.
Static site, no backend, no database, no auth — free to host.

**Live:** https://hein-htet-portfolio-three.vercel.app

## Sections

Hero · About · Skills · Projects · Experience · Certifications · Education · Contact

Bilingual (English / Japanese) — the toggle button in the nav bar switches every section instantly
and remembers your choice (`localStorage`).

## Editing content

All page content lives in one file: [`src/data/portfolioData.js`](src/data/portfolioData.js).
Edit that file to change your name, bio, skills, projects, experience, certifications, or contact
links. Text fields that appear in both languages are objects like `{ en: '...', ja: '...' }` — update
both when you change something. Fields shared across languages (links, dates, tech stack names)
are plain strings/arrays.

Nav labels, section headings, and button text live in the `ui` export at the bottom of the same file.

## Resume download

The "Download Resume" button links to `public/resume.pdf` — a redacted one-page summary (name,
education, work history, certifications, self-PR) with **no phone number, home address, birthdate,
or gender**, generated from [`scripts/generate_resume_pdf.py`](scripts/generate_resume_pdf.py) using
`reportlab`. If you update your education/work history in `portfolioData.js`, update the matching
text in that script too, then regenerate:

```bash
pip install reportlab
python scripts/generate_resume_pdf.py
```

The script hardcodes a Windows font path (`C:\Windows\Fonts\NotoSansJP-VF.ttf`) for Japanese text
rendering — adjust that path if you run it on macOS/Linux (e.g. point it at a Noto Sans JP `.ttf` you
install yourself). This PDF is a lightweight public-facing summary, not a replacement for the full
履歴書/職務経歴書 you send directly to companies.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs a static site to `dist/`. `npm run preview` serves that build locally so you
can sanity-check it before deploying.

## Deploy for free

### Option 1: Vercel (recommended, easiest for Vite)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Vercel auto-detects Vite — no config needed. Accept the default build command (`npm run build`) and
output directory (`dist`). You'll get a free `*.vercel.app` URL.

Alternatively, without the CLI: push this repo to GitHub, go to https://vercel.com/new, import the
repo, and click Deploy.

### Option 2: Cloudflare Pages

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist
```

Or via the dashboard: https://pages.cloudflare.com → Create a project → Connect to Git → build
command `npm run build`, output directory `dist`.

### Option 3: GitHub Pages

1. Install the deploy helper:
   ```bash
   npm install -D gh-pages
   ```
2. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
3. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`.
4. Run:
   ```bash
   npm run deploy
   ```
5. In the GitHub repo settings → Pages, set the source to the `gh-pages` branch.

## Push to GitHub

This is already set up and pushed to https://github.com/solo-leveling/portfolio.
To push future changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

## What to replace before sending this to companies

- **Resume download** — `profile.resumeUrl` points at `/resume.pdf`, but no such file exists yet and
  no button links to it. Add the PDF to `public/resume.pdf` and wire up a download button in
  `src/components/Hero.jsx` if you want one.
- **OG image** — `public/og-image.svg` is a simple placeholder banner. Replace it with a real
  1200×630 PNG/JPG screenshot for the best link-preview compatibility on LinkedIn/Twitter/etc.
- **Site URL** — now live at https://hein-htet-portfolio-three.vercel.app. If you later attach a
  custom domain, update the URL in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.
- **Favicon** — `public/favicon.svg` is a simple "HH" monogram placeholder; swap it for your own if
  you'd like something more custom.

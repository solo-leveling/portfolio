# Hein Htet — Portfolio

A simple, fast, mobile-responsive personal portfolio site built with React + Vite + Tailwind CSS.
Static site, no backend, no database, no auth — free to host.

## Sections

Hero · About · Skills · Projects · Experience · Certifications · Education · Contact

## Editing content

All page content lives in one file: [`src/data/portfolioData.js`](src/data/portfolioData.js).
Edit that file to change your name, bio, skills, projects, experience, certifications, or contact links.

**Search that file for `[PLACEHOLDER]` — several values are sample/guessed data and need your real
details before you send this site to employers.** See the "What to replace" list below.

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

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/solo-leveling/<your-repo-name>.git
git push -u origin main
```

## What to replace before sending this to companies

- **Contact email** — `profile.email` in `src/data/portfolioData.js` is a placeholder.
- **LinkedIn** — `profile.linkedin` is empty; add your URL or leave blank to hide the button.
- **Japanese Learning Platform** project — no matching repo was found on your GitHub, so this entire
  card (description, tech stack, links) is a placeholder. Replace it with your real project, or
  remove it from the `projects` array.
- **Notes App live demo link** — the URL currently set on the GitHub repo
  (`notes-kmistryys-projects.vercel.app`) looks like it may belong to a different Vercel account.
  Verify it's actually your deployment before sharing it, or remove/replace it.
- **Work experience** — no work history was provided, so `experience` in the data file is a
  placeholder. Add your real role(s), or delete the Experience section from `src/App.jsx` if not
  applicable yet.
- **Certification and education dates** — add the dates you earned your AWS Certified Cloud
  Practitioner, IT Passport, and JLPT N1, and your Ehle Institute enrollment/graduation period.
- **OG image** — `public/og-image.svg` is a simple placeholder banner. Replace it with a real
  1200×630 PNG/JPG screenshot for the best link-preview compatibility on LinkedIn/Twitter/etc.
- **Site URL** — once deployed, replace `https://your-portfolio-domain.example` in `index.html`,
  `public/robots.txt`, and `public/sitemap.xml` with your real deployed URL.
- **Favicon** — `public/favicon.svg` is a simple "HH" monogram placeholder; swap it for your own if
  you'd like something more custom.

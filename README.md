# Partita website

Source of **https://partita-notation.github.io**, the website of [Partita](https://github.com/partita-notation/partita), the open source music notation editor.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). Every push to `main` is built and published to GitHub Pages by `.github/workflows/deploy.yml`.

## Working on the site

Requires Node.js 22.23 or newer (CI uses Node 24).

```bash
npm install
npm run dev       # local server at http://localhost:4321
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Layout

```
src/content/docs/          pages (Markdown / MDX); the folder structure is the URL
  index.mdx                home page
  download.mdx             downloads (direct links resolved from the GitHub API) and system requirements
  support.mdx              how to support the project
  news/                    news posts (starlight-blog)
  guide/                   user guide
  project/                 roadmap, contributing, credits
  es/                      Spanish pages; anything missing falls back to English
src/components/            home page and download components
src/assets/screens/        app screenshots, light and dark (2880×1800)
public/media/typing.webp   animation of notes being typed and dragged
src/styles/custom.css      accent colors, theme-specific images
astro.config.mjs           site title, languages, sidebar, news
```

### Updating the screenshots

They come from the app repository's `dev/app.html` (the real interface with a fake backend), served over HTTP, with headless Chrome:

```bash
chrome --headless=new --hide-scrollbars --window-size=1440,900 --force-device-scale-factor=2 --screenshot=app-light.png "http://localhost:8765/dev/app.html?update=none&demo&theme=light"
```

Use `theme=dark` for the dark one. Feature images on the home page are crops of these files (`crop` in pixels).

To add a page, create a `.md` file under `src/content/docs/` and add its slug to the `sidebar` in `astro.config.mjs`.

The user guide follows `docs/USAGE.md` in the app repository. When the app changes, update both.

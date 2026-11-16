# Da Capo website

Source of **https://dacapo-editor.github.io**, the website of [Da Capo](https://github.com/dacapo-editor/dacapo), the open source music notation editor.

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
  download.mdx             download and build instructions
  guide/                   user guide
  project/                 roadmap, contributing, credits
src/assets/logo.png        logo (the app icon)
src/styles/custom.css      accent colors
astro.config.mjs           site title, sidebar, links
```

To add a page, create a `.md` file under `src/content/docs/` and add its slug to the `sidebar` in `astro.config.mjs`.

The user guide follows `docs/USAGE.md` in the app repository. When the app changes, update both.

# jhojin7 · Blog & Portfolio

Built with [Astro Micro](https://github.com/trevortylerlee/astro-micro), based on [Astro Nano](https://github.com/markhorn-dev/astro-nano).

**Website:** https://jhojin7.github.io/blog/

## Local development

Use Node.js 24 (`nvm use` if you use nvm).

```sh
npm ci
npm run dev
```

Open the `/blog/` path shown by Astro. Run `npm run build` to check types, build the site, and generate the Pagefind search index. Use `npm run preview` to check the production build.

## Edit your site

- Site title, descriptions, GitHub/contact links: `src/consts.ts`
- Home: `src/pages/index.astro`
- About: `src/pages/about.astro`
- Blog posts: `src/content/blog/<slug>/index.md` or `index.mdx`
- Project pages: `src/content/projects/<slug>/index.md` or `index.mdx`
- Menu: `src/components/Header.astro`

The original theme's example posts and projects are retained as editable examples. They are theme documentation and examples, not personal project claims.

### Blog frontmatter

```yaml
---
title: "첫 번째 글"
description: "글에 대한 짧은 설명"
date: "2026-11-04"
tags: [notes]
draft: false
---
```

Project frontmatter uses the same required title, description, and date, plus optional `demoURL`, `repoURL`, and `draft` fields.

## GitHub Pages deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: Node.js 24 installs dependencies, runs Astro's type check and build, and deploys the output to GitHub Pages. No custom domain is needed.

`astro.config.mjs` uses `site: "https://jhojin7.github.io"` and `base: "/blog"`. Internal component links use `withBase()` in `src/lib/utils.ts`. Root-relative Markdown/MDX links and images are prefixed automatically by `scripts/remark-base-path.mjs`; write logical paths such as `/about/`, `/blog/my-post/`, and `/image.png` without adding the deployment base yourself. Fragments and external links are preserved.

Search, light/dark/system theme buttons, tags, RSS, sitemap, code copy buttons, and article tables of contents are included. Theme buttons are in the footer.

## Optional comments

The Giscus component is retained but stays disabled until connected to your GitHub Discussions repository. Configure the public repository/category identifiers from `.env.example` using [Giscus](https://giscus.app). For local builds, put them in `.env`; for GitHub Actions, set repository variables and pass them through the workflow's build environment. Do not commit credentials.

## License and attribution

The original Astro Micro MIT license is retained in `LICENSE`. Imported from upstream commit `af69926c87341719846fe0e7a415483deb4e05ee`.

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import remarkBasePath from "./scripts/remark-base-path.mjs";

const base = "/blog";

// https://astro.build/config
export default defineConfig({
  site: "https://jhojin7.github.io",
  base,
  trailingSlash: "always",
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [[remarkBasePath, { base }]],
    shikiConfig: {
      theme: "css-variables",
    },
  },
});

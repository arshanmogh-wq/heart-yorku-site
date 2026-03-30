import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://heart-yorku-site.pages.dev",
  output: "static",
  outDir: path.resolve(__dirname, "dist"),
  publicDir: path.resolve(__dirname, "public"),
  integrations: [sitemap()],
});

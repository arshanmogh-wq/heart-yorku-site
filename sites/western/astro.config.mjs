import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://heart-yorku-site.pages.dev",
  base: "/western",
  output: "static",
  outDir: path.resolve(__dirname, "../../dist/western"),
  publicDir: path.resolve(__dirname, "public"),
  integrations: [sitemap()],
});

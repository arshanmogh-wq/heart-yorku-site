import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://heart-yorku-site.pages.dev',
  output: 'static',
  integrations: [sitemap()],
});

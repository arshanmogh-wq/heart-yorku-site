import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://heart-yorku.netlify.app', // Placeholder URL
  output: 'static',
  integrations: [sitemap()],
});

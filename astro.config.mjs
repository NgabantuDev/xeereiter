import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.xeereiter.com',
  integrations: [sitemap()],
  // The dev toolbar never ships to production, but it does show up in a
  // Lighthouse run against `astro dev` — as unminified JS and duplicate
  // module warnings that don't reflect the deployed site. Off by default
  // here so local performance checks measure the real page, not the
  // toolbar. Re-enable per-session with the toolbar's own toggle if needed.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
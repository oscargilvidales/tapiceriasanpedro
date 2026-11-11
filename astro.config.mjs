// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tapiceriasanpedro.com',

  vite: {
    plugins: [tailwindcss()]
  },

  trailingSlash: 'always',

  integrations: [
    sitemap({
      // Las páginas legales llevan noindex: fuera del sitemap
      filter: (page) =>
        !/\/(aviso-legal|politica-privacidad|politica-cookies)\/$/.test(page),
    }),
  ],
});
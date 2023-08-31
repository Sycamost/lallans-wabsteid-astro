import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('payment-success-confirmation'),
    }),
  ],
  site: 'https://scotsleidassocie.org',
});

import type { APIContext } from 'astro';

export async function get(context: APIContext) {
  return new Response(`
    User-agent: *
    User-agent: AdsBot-Google
    Disallow: */payment-success-confirmation

    Sitemap: ${context.site}sitemap-index.xml
  `);
}

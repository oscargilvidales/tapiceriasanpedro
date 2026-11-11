import type { APIRoute } from 'astro';
import servicios from '../data/servicios.json';

// Sitemap para Google. Las páginas legales llevan noindex, así que no se incluyen.
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://tapiceriasanpedro.com');
  const rutas = [
    '/',
    '/sobre-nosotros/',
    ...servicios.filter((s) => !s.oculto).map((s) => `/servicios/${s.id}/`),
  ];

  const urls = rutas
    .map((ruta) => `  <url><loc>${new URL(ruta, base).href}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

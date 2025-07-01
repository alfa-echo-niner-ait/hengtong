import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api',        // Block API routes
        '/admin',      // Block admin panel
        '/private',    // Block private paths
        '/_next',      // Block Next.js internal assets
        '/server',     // Block server files if exposed
      ],
    },
    sitemap: 'https://hengtongtrading.com/sitemap.xml',
  }
}
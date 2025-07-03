import type { MetadataRoute } from 'next'
import { products } from '@/data/products'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: '/products',
      lastModified: new Date(),
      priority: 0.95,
    },
    ...products.map((product) => ({
      url: product.url,
      lastModified: new Date(),
      priority: 0.9,
    })),
    {
      url: '/faq',
      lastModified: new Date(),
    },
    {
      url: '/about',
      lastModified: new Date(),
    },
    {
      url: '/contact',
      lastModified: new Date(),
    },
  ]
}
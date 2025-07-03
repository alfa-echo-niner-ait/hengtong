import type { MetadataRoute } from 'next'
import { products } from '@/data/products'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hengtongtrading.com',
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: 'https://hengtongtrading.com/products',
      lastModified: new Date(),
      priority: 0.95,
    },
    ...products.map((product) => ({
      url: "https://hengtongtrading.com" + product.url,
      lastModified: new Date(),
      priority: 0.9,
    })),
    {
      url: 'https://hengtongtrading.com/faq',
      lastModified: new Date(),
    },
    {
      url: 'https://hengtongtrading.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://hengtongtrading.com/contact',
      lastModified: new Date(),
    },
  ]
}
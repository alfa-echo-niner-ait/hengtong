import type { MetadataRoute } from 'next'
import { products } from '@/data/products'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
      lastModified: new Date(),
    },
    {
      url: '/products',
      lastModified: new Date(),
    },
    ...products.map((product) => ({
      url: product.url,
      lastModified: new Date(),
    })),
    {
      url: '/faq',
      lastModified: new Date(),
    },
  ]
}
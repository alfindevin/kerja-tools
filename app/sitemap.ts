import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { thrGuides } from '@/lib/thrGuides';

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    { path: '', priority: 1 },
    { path: '/kalkulator-thr', priority: 0.95 },
    { path: '/kalkulator-kenaikan-gaji', priority: 0.85 },
    { path: '/kalkulator-gaji-bersih', priority: 0.85 },
    { path: '/panduan', priority: 0.8 }
  ];

  const guides = thrGuides.map(({ slug }) => ({
    path: `/panduan/${slug}`,
    priority: 0.75
  }));

  return [...core, ...guides].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date('2026-09-25'),
    changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
    priority
  }));
}

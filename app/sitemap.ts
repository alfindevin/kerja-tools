import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://kerja-tools.vercel.app';
  return ['', '/kalkulator-thr', '/kalkulator-kenaikan-gaji', '/kalkulator-gaji-bersih'].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : .8
  }));
}

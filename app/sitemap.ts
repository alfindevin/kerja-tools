import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { thrGuides } from '@/lib/thrGuides';
import { tools } from '@/lib/tools';

const extraGuidePaths = [
  '/panduan/cara-menghitung-lembur',
  '/panduan/cara-menghitung-gaji-prorata',
  '/panduan/cara-menghitung-pesangon',
  '/panduan/komponen-pesangon-upmk-penggantian-hak',
  '/panduan/cuti-tahunan-karyawan',
  '/panduan/cara-menghitung-bonus-karyawan'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    { path: '', priority: 1 },
    ...tools.map((tool) => ({ path: tool.href, priority: tool.href === '/kalkulator-thr' ? 0.95 : 0.85 })),
    { path: '/panduan', priority: 0.8 },
    { path: '/tentang', priority: 0.65 },
    { path: '/metodologi', priority: 0.65 }
  ];

  const guides = [
    ...thrGuides.map(({ slug }) => ({
      path: `/panduan/${slug}`,
      priority: 0.75
    })),
    ...extraGuidePaths.map((path) => ({ path, priority: 0.75 }))
  ];

  return [...core, ...guides].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date('2026-09-25'),
    changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
    priority
  }));
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://kerja-tools.vercel.app';

export const siteUrl = (path = '') =>
  `${SITE_URL}${path.startsWith('/') || path === '' ? path : `/${path}`}`;

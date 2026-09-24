import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KerjaTools',
    short_name: 'KerjaTools',
    description: 'Tools kerja gratis untuk pekerja Indonesia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f8f5',
    theme_color: '#2f6f4e',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }
    ]
  };
}

import type { Metadata } from 'next';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'KerjaTools — Tools Gratis untuk Pekerja Indonesia', template: '%s | KerjaTools' },
  description: 'Kalkulator dan generator gratis untuk membantu pekerja Indonesia menghitung THR, kenaikan gaji, take-home pay, dan kebutuhan kerja lainnya.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'KerjaTools — Tools Gratis untuk Pekerja Indonesia',
    description: 'Hitung THR, kenaikan gaji, dan take-home pay dengan cepat.',
    type: 'website',
    locale: 'id_ID'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body><SiteNav />{children}<SiteFooter /></body>
    </html>
  );
}

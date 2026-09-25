import type { Metadata } from 'next';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { SITE_URL } from '@/lib/site';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'KerjaTools — Tools Gratis untuk Pekerja Indonesia', template: '%s | KerjaTools' },
  description: 'Kalkulator THR, lembur, prorata gaji, kenaikan gaji, take-home pay, dan panduan kerja gratis untuk pekerja Indonesia.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'KerjaTools — Tools Gratis untuk Pekerja Indonesia',
    description: 'Hitung THR, lembur, prorata gaji, kenaikan gaji, dan take-home pay dengan cepat.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'KerjaTools'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

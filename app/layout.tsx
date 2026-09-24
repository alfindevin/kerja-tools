import type { Metadata } from 'next';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kerja-tools.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'KerjaTools — Tools Gratis untuk Pekerja Indonesia', template: '%s | KerjaTools' },
  description: 'Kalkulator dan generator gratis untuk membantu pekerja Indonesia menghitung THR, kenaikan gaji, take-home pay, dan kebutuhan kerja lainnya.',
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

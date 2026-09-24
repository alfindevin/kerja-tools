import type { Metadata } from 'next';
import SalaryRaiseCalculator from './SalaryRaiseCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Kenaikan Gaji — Hitung Persentase & Gaji Baru',
  description: 'Hitung nominal kenaikan gaji dan gaji baru berdasarkan persentase kenaikan secara gratis.',
  alternates: { canonical: '/kalkulator-kenaikan-gaji' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Kenaikan Gaji KerjaTools',
    url: siteUrl('/kalkulator-kenaikan-gaji'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator gratis untuk menghitung nominal kenaikan dan gaji baru.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return <main className="tool-shell"><div className="container">
    <JsonLd data={schema} />
    <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Kalkulator Kenaikan Gaji' }]} />
    <header className="tool-head"><span className="eyebrow">Kalkulator kerja</span><h1>Kalkulator kenaikan gaji</h1><p>Cek berapa nominal tambahan dan gaji baru setelah kenaikan.</p></header>
    <SalaryRaiseCalculator />
    <article className="content seo-content">
      <h2>Cara menghitung kenaikan gaji</h2>
      <p>Kalikan gaji saat ini dengan persentase kenaikan. Setelah mendapat nominal kenaikannya, tambahkan angka tersebut ke gaji lama.</p>
      <h2>Contoh kenaikan gaji 10%</h2>
      <p>Jika gaji Rp6.000.000 naik 10%, kenaikannya Rp600.000 sehingga gaji baru menjadi Rp6.600.000.</p>
      <p className="disclaimer">Kalkulator ini menghitung persentase secara matematis dan tidak menentukan kebijakan kenaikan gaji perusahaan.</p>
    </article>
  </div></main>;
}

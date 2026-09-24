import type { Metadata } from 'next';
import TakeHomePayCalculator from './TakeHomePayCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Gaji Bersih — Hitung Take-Home Pay',
  description: 'Hitung estimasi take-home pay dari gaji pokok, tunjangan, dan total potongan bulanan.',
  alternates: { canonical: '/kalkulator-gaji-bersih' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Gaji Bersih KerjaTools',
    url: siteUrl('/kalkulator-gaji-bersih'),
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator gratis untuk mengestimasi gaji bersih atau take-home pay.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return <main className="tool-shell"><div className="container">
    <JsonLd data={schema} />
    <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Kalkulator Gaji Bersih' }]} />
    <header className="tool-head"><span className="eyebrow">Kalkulator kerja</span><h1>Kalkulator gaji bersih</h1><p>Estimasi take-home pay berdasarkan angka pada slip gaji kamu.</p></header>
    <TakeHomePayCalculator />
    <article className="content seo-content">
      <h2>Apa itu take-home pay?</h2>
      <p>Take-home pay adalah jumlah yang diterima setelah komponen penghasilan ditambah dan potongan dikurangkan. Angka pada slip gaji tiap pekerja dapat berbeda.</p>
      <h2>Kenapa potongan dimasukkan manual?</h2>
      <p>Komponen pajak dan jaminan sosial dapat berbeda menurut status, batas upah, dan kondisi masing-masing pekerja. Versi ini memakai total potongan dari slip gaji agar tidak berpura-pura menjadi kalkulasi pajak resmi.</p>
      <p className="disclaimer">Hasil bersifat estimasi dan tidak menggantikan payroll resmi.</p>
    </article>
  </div></main>;
}

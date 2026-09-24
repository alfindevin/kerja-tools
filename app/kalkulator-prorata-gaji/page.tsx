import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ProrataCalculator from './ProrataCalculator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Prorata Gaji — Hitung Gaji Masuk Tengah Bulan',
  description: 'Hitung estimasi gaji prorata berdasarkan gaji bulanan, hari kerja yang dijalani, dan total hari kerja.',
  alternates: { canonical: '/kalkulator-prorata-gaji' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Prorata Gaji KerjaTools',
    url: siteUrl('/kalkulator-prorata-gaji'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator gratis untuk mengestimasi gaji prorata berdasarkan hari kerja.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Kalkulator Prorata Gaji' }]} />
        <header className="tool-head">
          <span className="eyebrow">Kalkulator gaji</span>
          <h1>Kalkulator Prorata Gaji</h1>
          <p>Untuk estimasi saat mulai atau berhenti bekerja di tengah periode penggajian.</p>
        </header>

        <ProrataCalculator />

        <article className="content seo-content">
          <h2>Apa itu gaji prorata?</h2>
          <p>Gaji prorata adalah pembayaran proporsional ketika seorang pekerja tidak menjalani seluruh hari kerja dalam satu periode penggajian.</p>
          <h2>Kenapa jumlah hari kerja bisa berbeda?</h2>
          <p>Metode prorata dapat mengikuti kebijakan payroll atau perjanjian perusahaan. Karena itu kalkulator ini meminta total hari kerja sebagai input, bukan menetapkan satu angka untuk semua perusahaan.</p>
          <h2>Contoh sederhana</h2>
          <p>Jika gaji bulanan Rp6.000.000, periode memiliki 22 hari kerja, dan kamu menjalani 10 hari, estimasinya adalah Rp6.000.000 ÷ 22 × 10.</p>
          <p className="disclaimer">Gunakan hasil sebagai estimasi matematis. Cocokkan dengan kontrak, kebijakan payroll, atau slip gaji perusahaan.</p>
        </article>
      </div>
    </main>
  );
}

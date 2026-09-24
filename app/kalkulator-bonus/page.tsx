import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import BonusCalculator from './BonusCalculator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Bonus Karyawan — Simulasi Bonus Gaji',
  description: 'Simulasikan bonus karyawan berdasarkan persentase atau kelipatan gaji, dengan potongan manual opsional.',
  alternates: { canonical: '/kalkulator-bonus' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Bonus KerjaTools',
    url: siteUrl('/kalkulator-bonus'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator simulasi bonus karyawan berdasarkan kebijakan perusahaan.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Kalkulator Bonus' }]} />
        <header className="tool-head">
          <span className="eyebrow">Kalkulator gaji</span>
          <h1>Kalkulator Bonus Karyawan</h1>
          <p>Simulasikan bonus berdasarkan persentase atau kelipatan gaji bulanan.</p>
        </header>

        <BonusCalculator />

        <article className="content seo-content">
          <h2>Bonus berbeda dengan THR</h2>
          <p>PP No. 36 Tahun 2021 menyebut bonus dapat diberikan pengusaha kepada pekerja atas keuntungan perusahaan. Pengaturan bonus untuk pekerja ditetapkan dalam perjanjian kerja, peraturan perusahaan, atau perjanjian kerja bersama.</p>

          <h2>Kenapa kalkulator ini tidak menentukan persentase otomatis?</h2>
          <p>Tidak ada satu persentase bonus umum yang berlaku untuk semua perusahaan. Karena itu kamu memasukkan sendiri formula yang dipakai perusahaanmu.</p>

          <h2>Sumber resmi</h2>
          <p><a className="tag" href="https://jdih.kemnaker.go.id/asset/data_puu/PP362021.pdf" target="_blank" rel="noreferrer">PP No. 36 Tahun 2021 — JDIH Kemnaker ↗</a></p>
          <p className="disclaimer">Hasil adalah simulasi dan tidak menentukan hak bonus, pajak, atau nilai payroll resmi.</p>
        </article>
      </div>
    </main>
  );
}

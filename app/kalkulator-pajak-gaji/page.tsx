import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import AnnualTaxCalculator from './AnnualTaxCalculator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Pajak Gaji Sederhana 2026 — Estimasi PPh Tahunan',
  description: 'Estimasi PPh tahunan berdasarkan penghasilan neto, PTKP, dan tarif progresif Pasal 17. Bukan kalkulator pemotongan payroll bulanan.',
  alternates: { canonical: '/kalkulator-pajak-gaji' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Pajak Gaji KerjaTools',
    url: siteUrl('/kalkulator-pajak-gaji'),
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator estimasi PPh tahunan sederhana untuk wajib pajak orang pribadi.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Kalkulator Pajak Gaji' }]} />
        <header className="tool-head">
          <span className="eyebrow">Kalkulator pajak</span>
          <h1>Kalkulator Pajak Gaji Sederhana 2026</h1>
          <p>Estimasi PPh tahunan dari penghasilan neto, PTKP, dan tarif progresif.</p>
        </header>

        <AnnualTaxCalculator />

        <article className="content seo-content">
          <h2>Tarif progresif orang pribadi</h2>
          <p>Tarif Pasal 17 yang berlaku menggunakan lapisan 5% sampai Rp60 juta PKP, 15% untuk lapisan berikutnya sampai Rp250 juta, 25% sampai Rp500 juta, 30% sampai Rp5 miliar, dan 35% di atas Rp5 miliar.</p>

          <h2>PTKP yang digunakan</h2>
          <p>PTKP dasar TK/0 adalah Rp54 juta setahun. Tambahan status kawin dan tanggungan menggunakan kenaikan Rp4,5 juta sesuai status yang dipilih.</p>

          <h2>Kenapa hasil bisa berbeda dari slip gaji bulanan?</h2>
          <p>PP No. 58 Tahun 2023 dan PMK No. 168 Tahun 2023 menggunakan tarif efektif untuk pemotongan PPh 21 bulanan pada periode tertentu. Kalkulator ini sengaja menghitung estimasi pajak tahunan, bukan pola pemotongan bulanan TER.</p>

          <h2>Sumber resmi</h2>
          <div className="source-links">
            <a href="https://www.pajak.go.id/id/artikel/tarif-efektif-rata-rata-penyempurnaan-perhitungan-pph-pasal-21" target="_blank" rel="noreferrer">DJP — Tarif Efektif PPh 21 ↗</a>
            <a href="https://www.jdih.kemenkeu.go.id/dok/pmk-168-tahun-2023/view" target="_blank" rel="noreferrer">PMK No. 168 Tahun 2023 ↗</a>
          </div>
          <p className="disclaimer">Estimasi ini tidak mempertimbangkan seluruh pengurang, penghasilan lain, insentif, perlakuan khusus, atau kondisi perpajakan individual.</p>
        </article>
      </div>
    </main>
  );
}

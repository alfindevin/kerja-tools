import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import OvertimeCalculator from './OvertimeCalculator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Lembur 2026 — Hitung Upah Lembur',
  description: 'Hitung estimasi upah lembur hari kerja dan hari libur berdasarkan PP No. 35 Tahun 2021.',
  alternates: { canonical: '/kalkulator-lembur' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Lembur KerjaTools',
    url: siteUrl('/kalkulator-lembur'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator gratis untuk mengestimasi upah kerja lembur.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Kalkulator Lembur' }]} />
        <header className="tool-head">
          <span className="eyebrow">Kalkulator kerja</span>
          <h1>Kalkulator Lembur 2026</h1>
          <p>Estimasi upah lembur berdasarkan upah bulanan, jumlah jam, dan jenis hari.</p>
        </header>

        <OvertimeCalculator />

        <article className="content seo-content">
          <h2>Rumus dasar upah lembur</h2>
          <p>PP No. 35 Tahun 2021 menetapkan upah sejam sebesar 1/173 dari upah sebulan. Untuk lembur pada hari kerja, jam pertama dibayar 1,5 kali upah sejam dan setiap jam berikutnya 2 kali upah sejam.</p>

          <h2>Lembur pada hari istirahat atau hari libur</h2>
          <p>Koefisien berbeda menurut pola 5 atau 6 hari kerja. Kalkulator ini menyediakan skenario hari istirahat/libur untuk kedua pola tersebut, termasuk hari kerja terpendek pada pola 6 hari.</p>

          <h2>Batas waktu lembur</h2>
          <p>PP No. 35 Tahun 2021 membatasi waktu kerja lembur paling lama 4 jam dalam 1 hari dan 18 jam dalam 1 minggu. Batas tersebut tidak termasuk lembur pada waktu istirahat mingguan dan/atau hari libur resmi.</p>

          <h2>Sumber resmi</h2>
          <p><a className="tag" href="https://jdih.kemnaker.go.id/peraturan/detail/1723/peraturan-pemerintah-nomor-35-tahun-2021" target="_blank" rel="noreferrer">PP No. 35 Tahun 2021 — JDIH Kemnaker ↗</a></p>
          <p className="disclaimer">Kalkulator ini adalah estimasi umum. Komponen upah, sektor tertentu, perjanjian kerja, dan kebijakan perusahaan dapat memengaruhi hasil resmi.</p>
        </article>
      </div>
    </main>
  );
}

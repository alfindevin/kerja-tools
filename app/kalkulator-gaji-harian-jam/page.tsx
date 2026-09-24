import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import WageUnitCalculator from './WageUnitCalculator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Gaji per Hari & Jam 2026',
  description: 'Konversi upah bulanan menjadi upah harian, formula upah per jam paruh waktu, dan dasar upah sejam lembur.',
  alternates: { canonical: '/kalkulator-gaji-harian-jam' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Gaji Harian dan Jam KerjaTools',
    url: siteUrl('/kalkulator-gaji-harian-jam'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator konversi upah bulanan ke harian dan per jam.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Kalkulator Gaji per Hari & Jam' }]} />
        <header className="tool-head">
          <span className="eyebrow">Kalkulator gaji</span>
          <h1>Kalkulator Gaji per Hari & Jam</h1>
          <p>Konversi upah bulanan ke beberapa basis perhitungan yang sering dipakai dalam ketenagakerjaan.</p>
        </header>

        <WageUnitCalculator />

        <article className="content seo-content">
          <h2>Upah harian: dibagi 21 atau 25?</h2>
          <p>PP No. 36 Tahun 2021 menetapkan upah sehari dari upah sebulan dengan pembagi 21 untuk perusahaan dengan pola 5 hari kerja dan pembagi 25 untuk pola 6 hari kerja.</p>

          <h2>Upah per jam untuk pekerja paruh waktu</h2>
          <p>Pasal 16 menetapkan formula upah per jam untuk pekerja paruh waktu sebesar upah sebulan dibagi 126. Formula ini berbeda dari perhitungan upah kerja lembur.</p>

          <h2>Dasar upah sejam lembur</h2>
          <p>Untuk lembur, PP No. 35 Tahun 2021 menggunakan 1/173 kali upah sebulan sebagai dasar upah sejam. Gunakan <a href="/kalkulator-lembur">Kalkulator Lembur</a> jika ingin menghitung nominal lembur lengkap.</p>

          <h2>Sumber resmi</h2>
          <div className="source-links">
            <a href="https://jdih.kemnaker.go.id/peraturan/detail/1724" target="_blank" rel="noreferrer">PP No. 36 Tahun 2021 ↗</a>
            <a href="https://jdih.kemnaker.go.id/peraturan/detail/1723/peraturan-pemerintah-nomor-35-tahun-2021" target="_blank" rel="noreferrer">PP No. 35 Tahun 2021 ↗</a>
          </div>
          <p className="disclaimer">Peraturan pengupahan telah mengalami perubahan. KerjaTools menggunakan formula yang masih tercantum pada ketentuan relevan dan tetap menyarankan pengecekan dokumen terbaru untuk kasus khusus.</p>
        </article>
      </div>
    </main>
  );
}

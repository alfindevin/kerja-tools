import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import SeveranceCalculator from './SeveranceCalculator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Pesangon 2026 — Estimasi Pesangon & UPMK',
  description: 'Hitung estimasi komponen uang pesangon dan uang penghargaan masa kerja dengan tabel PP No. 35 Tahun 2021 dan konteks hukum terkini.',
  alternates: { canonical: '/kalkulator-pesangon' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Pesangon KerjaTools',
    url: siteUrl('/kalkulator-pesangon'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator estimasi komponen pesangon dan UPMK berdasarkan masa kerja.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Kalkulator Pesangon' }]} />

        <header className="tool-head">
          <span className="eyebrow">Kalkulator PHK</span>
          <h1>Kalkulator Pesangon 2026</h1>
          <p>Hitung komponen tabel pesangon dan UPMK berdasarkan masa kerja, lalu cocokkan hasilnya dengan dasar PHK dan aturan terbaru.</p>
        </header>

        <SeveranceCalculator />

        <article className="content seo-content">
          <h2>Kenapa ada faktor pesangon?</h2>
          <p>PP No. 35 Tahun 2021 memuat tabel uang pesangon dan UPMK serta ketentuan yang membedakan hak berdasarkan alasan PHK. KerjaTools tidak memilih alasan PHK atau multiplier secara otomatis karena penerapan akhirnya harus dibaca bersama aturan yang berlaku dan kondisi kasus.</p>

          <h2>Tabel masa kerja</h2>
          <p>Tabel PP No. 35 Tahun 2021 menggunakan rentang 1 sampai 9 bulan upah untuk komponen uang pesangon menurut masa kerja, sedangkan UPMK mulai muncul pada masa kerja 3 tahun dan mencapai 10 bulan upah pada masa kerja 24 tahun atau lebih.</p>

          <h2>Perhatikan Putusan MK No. 168/PUU-XXI/2023</h2>
          <p>Putusan Mahkamah Konstitusi mengubah pemaknaan beberapa norma ketenagakerjaan dalam UU No. 6 Tahun 2023, termasuk rumusan Pasal 156 ayat (2) menjadi “paling sedikit”. Karena itu hasil kalkulator ini harus diperlakukan sebagai simulasi komponen, bukan kesimpulan hukum mengenai jumlah minimum atau maksimum pada sengketa tertentu.</p>

          <h2>Penggantian hak</h2>
          <p>Komponen ini dapat mencakup cuti tahunan yang belum diambil dan belum gugur, biaya pulang, serta hak lain yang ditetapkan dalam perjanjian kerja, peraturan perusahaan, atau PKB.</p>

          <h2>Sumber resmi</h2>
          <div className="source-links">
            <a href="https://jdih.kemnaker.go.id/peraturan/detail/1723/peraturan-pemerintah-nomor-35-tahun-2021" target="_blank" rel="noreferrer">PP No. 35 Tahun 2021 ↗</a>
            <a href="https://peraturan.bpk.go.id/Details/246523/uu-no-6-tahun-2023" target="_blank" rel="noreferrer">UU No. 6 Tahun 2023 & putusan terkait ↗</a>
          </div>
          <p className="disclaimer">Ini alat estimasi, bukan penetapan hak PHK atau nasihat hukum. Untuk perselisihan atau PHK aktual, verifikasi dasar hukum terbaru dan pertimbangkan bantuan profesional.</p>
        </article>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import SeveranceCalculator from './SeveranceCalculator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Pesangon 2026 — Estimasi Pesangon & UPMK',
  description: 'Hitung estimasi komponen uang pesangon dan uang penghargaan masa kerja berdasarkan PP No. 35 Tahun 2021.',
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
          <p>Hitung komponen dasar uang pesangon dan UPMK berdasarkan masa kerja, lalu sesuaikan faktor menurut dasar PHK.</p>
        </header>

        <SeveranceCalculator />

        <article className="content seo-content">
          <h2>Kenapa ada faktor pesangon?</h2>
          <p>PP No. 35 Tahun 2021 menetapkan tabel dasar uang pesangon dan UPMK pada Pasal 40. Namun jumlah yang dibayarkan dapat berbeda karena pasal-pasal berikutnya mengaitkan hak dengan alasan PHK. Karena itu KerjaTools tidak menebak alasan PHK secara otomatis.</p>

          <h2>Tabel dasar masa kerja</h2>
          <p>Uang pesangon dasar meningkat dari 1 bulan upah untuk masa kerja kurang dari 1 tahun sampai maksimum 9 bulan upah untuk masa kerja 8 tahun atau lebih. UPMK mulai muncul pada masa kerja 3 tahun dan mencapai 10 bulan upah pada masa kerja 24 tahun atau lebih.</p>

          <h2>Penggantian hak</h2>
          <p>Pasal 40 juga mencakup penggantian hak seperti cuti tahunan yang belum diambil dan belum gugur, biaya pulang ke tempat pekerja diterima bekerja, serta hak lain yang ditetapkan dalam perjanjian atau peraturan perusahaan.</p>

          <h2>Sumber resmi</h2>
          <p><a className="tag" href="https://jdih.kemnaker.go.id/peraturan/detail/1723/peraturan-pemerintah-nomor-35-tahun-2021" target="_blank" rel="noreferrer">PP No. 35 Tahun 2021 — JDIH Kemnaker ↗</a></p>
          <p className="disclaimer">Ini alat estimasi, bukan penetapan hak PHK atau nasihat hukum. Cocokkan alasan PHK, komponen upah, perjanjian kerja, dan ketentuan terbaru sebelum mengambil keputusan.</p>
        </article>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Pesangon, UPMK & Penggantian Hak: Apa Bedanya?',
  description: 'Pahami perbedaan uang pesangon, uang penghargaan masa kerja (UPMK), dan uang penggantian hak dalam perhitungan PHK.',
  alternates: { canonical: '/panduan/komponen-pesangon-upmk-penggantian-hak' }
};

export default function Page() {
  return (
    <main className="tool-shell">
      <div className="container article-wrap">
        <Breadcrumbs items={[
          { name: 'KerjaTools', href: '/' },
          { name: 'Panduan', href: '/panduan' },
          { name: 'Komponen Pesangon' }
        ]} />

        <article>
          <header className="article-head">
            <span className="eyebrow">Panduan PHK</span>
            <h1>Pesangon, UPMK, dan Penggantian Hak: Apa Bedanya?</h1>
            <p className="article-lead">Ketiganya adalah komponen yang berbeda. Memisahkannya sejak awal membuat simulasi PHK lebih mudah diperiksa.</p>
            <p className="article-meta">Diperbarui 25 September 2026</p>
          </header>

          <div className="article-content">
            <section>
              <h2>Uang pesangon</h2>
              <p>Uang pesangon memiliki tabel dasar berdasarkan masa kerja. Nilai dasar ini kemudian perlu dibaca bersama ketentuan alasan PHK yang berlaku.</p>
            </section>

            <section>
              <h2>Uang penghargaan masa kerja (UPMK)</h2>
              <p>UPMK memberikan tambahan berdasarkan lamanya hubungan kerja, mulai dari kelompok masa kerja 3 tahun hingga 24 tahun atau lebih.</p>
            </section>

            <section>
              <h2>Uang penggantian hak</h2>
              <p>Penggantian hak tidak menggunakan tabel bulan upah yang sama. Komponennya terkait hak yang belum diterima atau hak lain yang telah ditetapkan dalam dokumen hubungan kerja.</p>
            </section>

            <section>
              <h2>Kenapa hasil akhir bisa berbeda?</h2>
              <p>Alasan PHK, dasar upah, isi perjanjian kerja, peraturan perusahaan, PKB, serta komponen hak yang masih tersisa dapat membuat nilai akhir berbeda antarpekerja.</p>
            </section>

            <section className="inline-cta">
              <h2>Lihat komponen dalam satu simulasi</h2>
              <Link className="primary-link" href="/kalkulator-pesangon">Gunakan Kalkulator Pesangon →</Link>
            </section>

            <section>
              <h2>Sumber resmi</h2>
              <p><a href="https://jdih.kemnaker.go.id/peraturan/detail/1723/peraturan-pemerintah-nomor-35-tahun-2021" target="_blank" rel="noreferrer">PP No. 35 Tahun 2021 — JDIH Kemnaker ↗</a></p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

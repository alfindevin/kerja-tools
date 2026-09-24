import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cara Menghitung Pesangon 2026 + Tabel Masa Kerja',
  description: 'Panduan cara membaca komponen dasar uang pesangon dan UPMK berdasarkan PP No. 35 Tahun 2021.',
  alternates: { canonical: '/panduan/cara-menghitung-pesangon' }
};

export default function Page() {
  return (
    <main className="tool-shell">
      <div className="container article-wrap">
        <Breadcrumbs items={[
          { name: 'KerjaTools', href: '/' },
          { name: 'Panduan', href: '/panduan' },
          { name: 'Cara Menghitung Pesangon' }
        ]} />

        <article>
          <header className="article-head">
            <span className="eyebrow">Panduan PHK</span>
            <h1>Cara Menghitung Pesangon 2026</h1>
            <p className="article-lead">Mulai dari tabel masa kerja, lalu pisahkan uang pesangon, UPMK, dan penggantian hak sebelum menerapkan ketentuan yang sesuai dengan alasan PHK.</p>
            <p className="article-meta">Diperbarui 25 September 2026</p>
          </header>

          <div className="article-content">
            <section>
              <h2>1. Tentukan dasar uang pesangon</h2>
              <p>Pasal 40 PP No. 35 Tahun 2021 menetapkan uang pesangon dasar dari 1 bulan upah untuk masa kerja kurang dari 1 tahun sampai 9 bulan upah untuk masa kerja 8 tahun atau lebih.</p>
            </section>

            <section>
              <h2>2. Hitung UPMK</h2>
              <p>Uang penghargaan masa kerja mulai diberikan pada masa kerja 3 tahun. Besarnya meningkat menurut kelompok masa kerja dan mencapai 10 bulan upah untuk masa kerja 24 tahun atau lebih.</p>
            </section>

            <section>
              <h2>3. Periksa alasan PHK</h2>
              <p>Jumlah akhir tidak cukup ditentukan dari masa kerja saja. Ketentuan PHK pada pasal-pasal berikutnya dapat menggunakan faktor berbeda terhadap uang pesangon dan/atau UPMK. Karena itu jangan memakai satu multiplier untuk semua kasus.</p>
            </section>

            <section>
              <h2>4. Tambahkan penggantian hak</h2>
              <p>Komponen ini dapat mencakup cuti tahunan yang belum diambil dan belum gugur, biaya pulang, serta hak lain yang ditetapkan dalam perjanjian kerja, peraturan perusahaan, atau PKB.</p>
            </section>

            <section className="inline-cta">
              <h2>Simulasikan komponen dasarnya</h2>
              <p>Masukkan upah dan masa kerja, lalu isi faktor sesuai dasar PHK yang sudah kamu verifikasi.</p>
              <Link className="primary-link" href="/kalkulator-pesangon">Buka Kalkulator Pesangon →</Link>
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

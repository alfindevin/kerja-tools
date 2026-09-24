import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cara Menghitung Pesangon 2026 + Tabel Masa Kerja',
  description: 'Panduan membaca komponen uang pesangon dan UPMK berdasarkan PP No. 35 Tahun 2021 serta konteks Putusan MK terbaru.',
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
            <p className="article-lead">Mulai dari tabel masa kerja, lalu pisahkan uang pesangon, UPMK, dan penggantian hak sebelum membaca ketentuan yang sesuai dengan alasan PHK.</p>
            <p className="article-meta">Diperbarui 25 September 2026</p>
          </header>

          <div className="article-content">
            <section>
              <h2>1. Tentukan komponen tabel uang pesangon</h2>
              <p>PP No. 35 Tahun 2021 memuat tabel 1 sampai 9 bulan upah berdasarkan masa kerja untuk komponen uang pesangon.</p>
            </section>

            <section>
              <h2>2. Hitung UPMK</h2>
              <p>Uang penghargaan masa kerja mulai muncul pada masa kerja 3 tahun. Besarnya meningkat menurut kelompok masa kerja dan mencapai 10 bulan upah untuk masa kerja 24 tahun atau lebih.</p>
            </section>

            <section>
              <h2>3. Baca alasan PHK dan aturan terkini</h2>
              <p>Jumlah akhir tidak cukup ditentukan dari masa kerja saja. Putusan MK No. 168/PUU-XXI/2023 juga mengubah pemaknaan sejumlah norma UU No. 6 Tahun 2023, termasuk rumusan Pasal 156 ayat (2) menjadi “paling sedikit”. Karena itu jangan memakai satu multiplier sebagai jawaban hukum untuk semua kasus.</p>
            </section>

            <section>
              <h2>4. Tambahkan penggantian hak</h2>
              <p>Komponen ini dapat mencakup cuti tahunan yang belum diambil dan belum gugur, biaya pulang, serta hak lain yang ditetapkan dalam perjanjian kerja, peraturan perusahaan, atau PKB.</p>
            </section>

            <section className="inline-cta">
              <h2>Simulasikan komponen dasarnya</h2>
              <p>Masukkan upah dan masa kerja, lalu gunakan hasilnya sebagai titik awal untuk verifikasi lebih lanjut.</p>
              <Link className="primary-link" href="/kalkulator-pesangon">Buka Kalkulator Pesangon →</Link>
            </section>

            <section>
              <h2>Sumber resmi</h2>
              <div className="source-links">
                <a href="https://jdih.kemnaker.go.id/peraturan/detail/1723/peraturan-pemerintah-nomor-35-tahun-2021" target="_blank" rel="noreferrer">PP No. 35 Tahun 2021 ↗</a>
                <a href="https://peraturan.bpk.go.id/Details/246523/uu-no-6-tahun-2023" target="_blank" rel="noreferrer">UU No. 6 Tahun 2023 & putusan terkait ↗</a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

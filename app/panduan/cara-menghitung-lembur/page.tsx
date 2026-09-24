import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cara Menghitung Lembur 2026 + Contoh',
  description: 'Pelajari rumus upah lembur hari kerja dan dasar upah sejam 1/173, lengkap dengan contoh dan kalkulator.',
  alternates: { canonical: '/panduan/cara-menghitung-lembur' }
};

export default function Page() {
  return (
    <main className="tool-shell">
      <div className="container article-wrap">
        <Breadcrumbs items={[
          { name: 'KerjaTools', href: '/' },
          { name: 'Panduan', href: '/panduan' },
          { name: 'Cara Menghitung Lembur' }
        ]} />

        <article>
          <header className="article-head">
            <span className="eyebrow">Panduan lembur</span>
            <h1>Cara Menghitung Lembur 2026</h1>
            <p className="article-lead">Mulai dari dasar upah sejam, lalu gunakan koefisien sesuai jenis hari dan jumlah jam lembur.</p>
            <p className="article-meta">Diperbarui 25 September 2026</p>
          </header>

          <div className="article-content">
            <section>
              <h2>Dasar upah sejam</h2>
              <p>PP No. 35 Tahun 2021 menetapkan dasar upah sejam untuk lembur sebesar 1/173 dari upah sebulan.</p>
            </section>

            <section>
              <h2>Lembur pada hari kerja</h2>
              <p>Jam pertama dibayar 1,5 kali upah sejam. Setiap jam berikutnya dibayar 2 kali upah sejam.</p>
              <p>Contoh: jika dasar upah sejam Rp34.682, maka 2 jam lembur hari kerja dihitung 1,5 × Rp34.682 + 2 × Rp34.682.</p>
            </section>

            <section>
              <h2>Hari libur memiliki koefisien berbeda</h2>
              <p>Pola 5 hari kerja dan 6 hari kerja menggunakan susunan koefisien yang berbeda pada hari istirahat mingguan atau hari libur resmi.</p>
            </section>

            <section className="inline-cta">
              <h2>Hitung otomatis</h2>
              <p>Pilih jenis hari dan masukkan jam lembur untuk melihat estimasinya.</p>
              <Link className="primary-link" href="/kalkulator-lembur">Buka Kalkulator Lembur →</Link>
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

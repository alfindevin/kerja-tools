import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cara Menghitung Gaji Prorata + Contoh',
  description: 'Pelajari cara menghitung gaji prorata saat masuk atau berhenti kerja di tengah bulan, lengkap dengan contoh sederhana.',
  alternates: { canonical: '/panduan/cara-menghitung-gaji-prorata' }
};

export default function Page() {
  return (
    <main className="tool-shell">
      <div className="container article-wrap">
        <Breadcrumbs items={[
          { name: 'KerjaTools', href: '/' },
          { name: 'Panduan', href: '/panduan' },
          { name: 'Cara Menghitung Gaji Prorata' }
        ]} />

        <article>
          <header className="article-head">
            <span className="eyebrow">Panduan gaji</span>
            <h1>Cara Menghitung Gaji Prorata</h1>
            <p className="article-lead">Gaji prorata biasanya digunakan ketika pekerja hanya menjalani sebagian periode penggajian.</p>
            <p className="article-meta">Diperbarui 25 September 2026</p>
          </header>

          <div className="article-content">
            <section>
              <h2>Rumus sederhana</h2>
              <p>Salah satu metode praktis adalah: gaji bulanan ÷ total hari kerja dalam periode × jumlah hari kerja yang dijalani.</p>
            </section>

            <section>
              <h2>Contoh</h2>
              <p>Gaji bulanan Rp6.000.000, total 22 hari kerja, dan pekerja menjalani 10 hari. Estimasinya adalah Rp6.000.000 ÷ 22 × 10.</p>
            </section>

            <section>
              <h2>Kenapa hasil payroll bisa berbeda?</h2>
              <p>Perusahaan dapat memiliki metode payroll yang ditetapkan dalam kontrak, peraturan perusahaan, atau kebijakan internal. Karena itu jumlah hari kerja sebaiknya dimasukkan sesuai metode yang benar-benar dipakai perusahaan.</p>
            </section>

            <section className="inline-cta">
              <h2>Hitung tanpa rumus manual</h2>
              <p>Masukkan gaji bulanan, total hari kerja, dan jumlah hari yang dijalani.</p>
              <Link className="primary-link" href="/kalkulator-prorata-gaji">Buka Kalkulator Prorata →</Link>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

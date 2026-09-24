import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cara Menghitung Bonus Karyawan + Contoh Simulasi',
  description: 'Pelajari simulasi bonus berdasarkan persentase atau kelipatan gaji dan kenapa bonus berbeda dengan THR.',
  alternates: { canonical: '/panduan/cara-menghitung-bonus-karyawan' }
};

export default function Page() {
  return (
    <main className="tool-shell">
      <div className="container article-wrap">
        <Breadcrumbs items={[
          { name: 'KerjaTools', href: '/' },
          { name: 'Panduan', href: '/panduan' },
          { name: 'Cara Menghitung Bonus Karyawan' }
        ]} />
        <article>
          <header className="article-head">
            <span className="eyebrow">Panduan gaji</span>
            <h1>Cara Menghitung Bonus Karyawan</h1>
            <p className="article-lead">Bonus dapat disimulasikan dari persentase atau kelipatan gaji, tetapi besarannya tetap mengikuti kebijakan perusahaan.</p>
            <p className="article-meta">Diperbarui 25 September 2026</p>
          </header>
          <div className="article-content">
            <section>
              <h2>Bonus berdasarkan persentase</h2>
              <p>Contoh sederhana: gaji Rp6.000.000 dengan bonus 50% menghasilkan bonus kotor Rp3.000.000 sebelum potongan yang berlaku.</p>
            </section>
            <section>
              <h2>Bonus berdasarkan kelipatan gaji</h2>
              <p>Jika perusahaan menggunakan formula 1,5 kali gaji, maka gaji Rp6.000.000 menghasilkan simulasi bonus kotor Rp9.000.000.</p>
            </section>
            <section>
              <h2>Bonus bukan THR</h2>
              <p>PP No. 36 Tahun 2021 menyebut bonus dapat diberikan atas keuntungan perusahaan dan pengaturannya berada dalam perjanjian kerja, peraturan perusahaan, atau PKB.</p>
            </section>
            <section className="inline-cta">
              <h2>Simulasikan bonusmu</h2>
              <Link className="primary-link" href="/kalkulator-bonus">Buka Kalkulator Bonus →</Link>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

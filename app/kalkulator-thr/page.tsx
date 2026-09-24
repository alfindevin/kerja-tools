import type { Metadata } from 'next';
import Link from 'next/link';
import ThrCalculator from './ThrCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator THR 2026 — Hitung THR Karyawan Online',
  description: 'Hitung estimasi THR karyawan berdasarkan masa kerja dan upah bulanan. Lengkap dengan rumus, contoh, dan sumber resmi Kemnaker.',
  alternates: { canonical: '/kalkulator-thr' },
  openGraph: {
    title: 'Kalkulator THR 2026 — Hitung THR Karyawan Online',
    description: 'Hitung estimasi THR berdasarkan masa kerja dan upah bulanan.',
    url: '/kalkulator-thr',
    type: 'website'
  }
};

export default function Page() {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator THR KerjaTools',
    url: siteUrl('/kalkulator-thr'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator gratis untuk mengestimasi THR karyawan berdasarkan masa kerja dan upah bulanan.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR'
    }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={appSchema} />
        <Breadcrumbs items={[
          { name: 'KerjaTools', href: '/' },
          { name: 'Kalkulator THR' }
        ]} />

        <header className="tool-head">
          <span className="eyebrow">Kalkulator kerja</span>
          <h1>Kalkulator THR Karyawan 2026</h1>
          <p>Masukkan upah bulanan dan masa kerja untuk mendapatkan estimasi THR dengan cepat.</p>
        </header>

        <ThrCalculator />

        <article className="content seo-content">
          <h2>Cara menghitung THR</h2>
          <p>Permenaker No. 6 Tahun 2016 menetapkan pekerja dengan masa kerja 12 bulan atau lebih memperoleh THR sebesar 1 bulan upah. Untuk masa kerja minimal 1 bulan tetapi kurang dari 12 bulan, nilai THR dihitung secara proporsional: masa kerja ÷ 12 × 1 bulan upah.</p>

          <h2>Contoh hitung THR</h2>
          <p>Jika upah satu bulan Rp6.000.000 dan masa kerja 6 bulan, estimasinya adalah 6 ÷ 12 × Rp6.000.000 = Rp3.000.000. Jika masa kerja sudah 12 bulan atau lebih, estimasi dasarnya menjadi 1 bulan upah.</p>

          <h2>Bagaimana jika masa kerja belum setahun?</h2>
          <p>Karyawan dengan masa kerja minimal 1 bulan tetapi belum 12 bulan menggunakan perhitungan proporsional. Baca <Link href="/panduan/thr-karyawan-belum-setahun">panduan THR karyawan belum setahun</Link> untuk contoh 3, 6, dan 9 bulan.</p>

          <h2>Bagaimana dengan karyawan kontrak dan harian lepas?</h2>
          <p>Permenaker No. 6 Tahun 2016 juga mencakup pekerja PKWT sesuai syarat masa kerja. Untuk pekerja harian lepas, dasar upah satu bulan menggunakan rata-rata upah sesuai ketentuan yang berlaku.</p>
          <div className="text-links">
            <Link href="/panduan/thr-karyawan-kontrak">THR karyawan kontrak →</Link>
            <Link href="/panduan/thr-karyawan-harian-lepas">THR pekerja harian lepas →</Link>
          </div>

          <h2>Aturan THR 2026</h2>
          <p>Kementerian Ketenagakerjaan menerbitkan Surat Edaran No. M/3/HK.04.00/III/2026 tentang pelaksanaan pemberian THR keagamaan tahun 2026 bagi pekerja/buruh di perusahaan.</p>
          <p><Link className="tag" href="/panduan/thr-2026">Baca ringkasan THR 2026 →</Link></p>

          <h2>Sumber resmi</h2>
          <div className="source-links">
            <a href="https://jdih.kemnaker.go.id/peraturan/detail/1207/peraturan-menteri-nomor-6-tahun-2016" target="_blank" rel="noreferrer">Permenaker No. 6 Tahun 2016 ↗</a>
            <a href="https://jdih.kemnaker.go.id/peraturan/detail/2983/surat-edaran-menteri-ketenagakerjaan-nomor-3-tahun-2026" target="_blank" rel="noreferrer">SE THR Tahun 2026 ↗</a>
          </div>
          <p className="disclaimer">KerjaTools adalah alat bantu estimasi, bukan nasihat hukum atau pengganti perhitungan resmi perusahaan.</p>
        </article>
      </div>
    </main>
  );
}

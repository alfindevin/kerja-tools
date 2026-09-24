import type { Metadata } from 'next';
import ThrCalculator from './ThrCalculator';

export const metadata: Metadata = {
  title: 'Kalkulator THR 2026 — Hitung THR Karyawan Online',
  description: 'Hitung estimasi THR karyawan berdasarkan masa kerja dan upah bulanan sesuai formula Permenaker No. 6 Tahun 2016.'
};

export default function Page() {
  return <main className="tool-shell"><div className="container">
    <header className="tool-head"><span className="eyebrow">Kalkulator kerja</span><h1>Kalkulator THR</h1><p>Masukkan upah bulanan dan masa kerja untuk mendapatkan estimasi THR dengan cepat.</p></header>
    <ThrCalculator />
    <article className="content"><h2>Cara menghitung THR</h2><p>Permenaker No. 6 Tahun 2016 menetapkan pekerja dengan masa kerja 12 bulan atau lebih memperoleh THR sebesar 1 bulan upah. Untuk masa kerja minimal 1 bulan tetapi kurang dari 12 bulan, nilai THR dihitung secara proporsional: masa kerja ÷ 12 × 1 bulan upah.</p><p>Untuk pekerja harian lepas, dasar upah satu bulan dapat menggunakan rata-rata upah sesuai ketentuan yang berlaku. Jika perusahaan memiliki ketentuan THR yang lebih besar, ketentuan yang lebih besar tersebut dapat berlaku.</p><p><a className="tag" href="https://jdih.kemnaker.go.id/peraturan/detail/1207/peraturan-menteri-nomor-6-tahun-2016" target="_blank" rel="noreferrer">Lihat sumber resmi JDIH Kemnaker →</a></p><p className="disclaimer">KerjaTools adalah alat bantu estimasi, bukan nasihat hukum atau pengganti perhitungan resmi perusahaan.</p></article>
  </div></main>;
}

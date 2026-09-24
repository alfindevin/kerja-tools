import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cuti Tahunan Karyawan 2026: Hak, Sisa Cuti & Pengajuan',
  description: 'Panduan ringkas cuti tahunan karyawan, hak minimum 12 hari kerja, pelaksanaan di perusahaan, dan cara mengecek saldo cuti.',
  alternates: { canonical: '/panduan/cuti-tahunan-karyawan' }
};

export default function Page() {
  return (
    <main className="tool-shell">
      <div className="container article-wrap">
        <Breadcrumbs items={[
          { name: 'KerjaTools', href: '/' },
          { name: 'Panduan', href: '/panduan' },
          { name: 'Cuti Tahunan Karyawan' }
        ]} />
        <article>
          <header className="article-head">
            <span className="eyebrow">Panduan cuti</span>
            <h1>Cuti Tahunan Karyawan 2026</h1>
            <p className="article-lead">Hak minimum dan pelaksanaan cuti adalah dua hal yang berbeda. Angka saldo resmimu tetap perlu dicocokkan dengan kebijakan perusahaan.</p>
            <p className="article-meta">Diperbarui 25 September 2026</p>
          </header>
          <div className="article-content">
            <section>
              <h2>Hak minimum cuti tahunan</h2>
              <p>Pasal 79 dalam UU No. 6 Tahun 2023 menetapkan cuti tahunan paling sedikit 12 hari kerja setelah pekerja bekerja 12 bulan secara terus-menerus.</p>
            </section>
            <section>
              <h2>Pelaksanaan mengikuti aturan perusahaan</h2>
              <p>Jadwal, alur persetujuan, carry-over, dan mekanisme pencatatan cuti dapat diatur dalam perjanjian kerja, peraturan perusahaan, atau PKB.</p>
            </section>
            <section>
              <h2>Cara mengecek sisa cuti</h2>
              <p>Mulai dari hak cuti periode berjalan, tambahkan carry-over jika ada, lalu kurangi cuti yang sudah dipakai.</p>
            </section>
            <section className="inline-cta">
              <h2>Hitung saldo cuti</h2>
              <Link className="primary-link" href="/kalkulator-sisa-cuti">Buka Kalkulator Sisa Cuti →</Link>
            </section>
            <section>
              <h2>Ajukan cuti dengan rapi</h2>
              <p>Jika butuh draft email, gunakan <Link href="/generator-email-cuti">Generator Email Cuti</Link> untuk menyusun tanggal, alasan opsional, dan handover.</p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

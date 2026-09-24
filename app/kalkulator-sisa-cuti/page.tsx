import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import LeaveBalanceCalculator from './LeaveBalanceCalculator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kalkulator Sisa Cuti — Hitung Saldo Cuti Tahunan',
  description: 'Hitung sisa cuti tahunan dari hak cuti, carry-over, cuti yang sudah dipakai, dan rencana cuti berikutnya.',
  alternates: { canonical: '/kalkulator-sisa-cuti' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kalkulator Sisa Cuti KerjaTools',
    url: siteUrl('/kalkulator-sisa-cuti'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Kalkulator saldo cuti tahunan untuk pekerja Indonesia.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Kalkulator Sisa Cuti' }]} />
        <header className="tool-head">
          <span className="eyebrow">Kalkulator cuti</span>
          <h1>Kalkulator Sisa Cuti</h1>
          <p>Catat hak cuti, yang sudah dipakai, carry-over, dan rencana cuti berikutnya.</p>
        </header>

        <LeaveBalanceCalculator />

        <article className="content seo-content">
          <h2>Berapa hak cuti tahunan minimum?</h2>
          <p>Pasal 79 dalam UU No. 6 Tahun 2023 menetapkan cuti tahunan paling sedikit 12 hari kerja setelah pekerja bekerja selama 12 bulan secara terus-menerus.</p>

          <h2>Apakah sisa cuti bisa dibawa ke tahun berikutnya?</h2>
          <p>Pelaksanaan cuti tahunan diatur dalam perjanjian kerja, peraturan perusahaan, atau perjanjian kerja bersama. Karena itu fitur carry-over di kalkulator ini dibuat sebagai input manual.</p>

          <h2>Sumber resmi</h2>
          <p><a className="tag" href="https://peraturan.bpk.go.id/Details/246523/uu-no-6-tahun-2023" target="_blank" rel="noreferrer">UU No. 6 Tahun 2023 — JDIH BPK ↗</a></p>
          <p className="disclaimer">Saldo resmi tetap mengikuti catatan HR dan aturan perusahaan. KerjaTools hanya membantu menghitung berdasarkan angka yang kamu masukkan.</p>
        </article>
      </div>
    </main>
  );
}

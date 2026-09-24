import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import LeaveEmailGenerator from './LeaveEmailGenerator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Generator Email Cuti Gratis — Buat Pengajuan Cuti',
  description: 'Buat draft email pengajuan cuti yang profesional, lengkap dengan tanggal, alasan opsional, dan rencana handover.',
  alternates: { canonical: '/generator-email-cuti' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generator Email Cuti KerjaTools',
    url: siteUrl('/generator-email-cuti'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Generator email pengajuan cuti gratis untuk pekerja Indonesia.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Generator Email Cuti' }]} />
        <header className="tool-head">
          <span className="eyebrow">Generator kerja</span>
          <h1>Generator Email Cuti</h1>
          <p>Buat draft email cuti yang singkat, sopan, dan mudah disesuaikan.</p>
        </header>

        <LeaveEmailGenerator />

        <article className="content seo-content">
          <h2>Apa yang sebaiknya ada di email cuti?</h2>
          <p>Sampaikan tanggal cuti, informasi handover yang relevan, dan permintaan konfirmasi. Alasan pribadi tidak harus dijelaskan secara berlebihan jika tidak diperlukan.</p>
          <h2>Periksa aturan perusahaan</h2>
          <p>UU No. 6 Tahun 2023 menetapkan hak cuti tahunan minimum, sementara pelaksanaannya diatur melalui perjanjian kerja, peraturan perusahaan, atau perjanjian kerja bersama. Pastikan pengajuanmu mengikuti alur persetujuan perusahaan.</p>
          <p><a className="tag" href="https://peraturan.bpk.go.id/Details/246523/uu-no-6-tahun-2023" target="_blank" rel="noreferrer">Lihat UU No. 6 Tahun 2023 ↗</a></p>
          <p className="disclaimer">Generator ini membantu penulisan email, bukan menjamin persetujuan cuti.</p>
        </article>
      </div>
    </main>
  );
}

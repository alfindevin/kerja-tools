import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ResignGenerator from './ResignGenerator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Generator Surat Resign Gratis — Buat Surat Pengunduran Diri',
  description: 'Buat surat pengunduran diri profesional secara gratis dengan preview instan dan tombol salin.',
  alternates: { canonical: '/generator-surat-resign' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generator Surat Resign KerjaTools',
    url: siteUrl('/generator-surat-resign'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Generator surat pengunduran diri gratis untuk pekerja Indonesia.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Generator Surat Resign' }]} />
        <header className="tool-head">
          <span className="eyebrow">Generator karier</span>
          <h1>Generator Surat Resign</h1>
          <p>Isi beberapa informasi dasar dan dapatkan draft surat pengunduran diri yang rapi dalam hitungan detik.</p>
        </header>

        <ResignGenerator />

        <article className="content seo-content">
          <h2>Apa yang perlu dicek sebelum mengirim surat?</h2>
          <p>Periksa masa pemberitahuan pada kontrak, peraturan perusahaan, atau perjanjian kerja bersama. Sesuaikan tanggal terakhir bekerja dan proses serah terima dengan ketentuan tempat kerja.</p>
          <h2>Jangan masukkan informasi sensitif</h2>
          <p>Generator ini tidak membutuhkan nomor identitas, nomor rekening, alamat lengkap, atau informasi pribadi lain yang tidak relevan dengan surat resign.</p>
          <p className="disclaimer">Template ini adalah bantuan penulisan umum. Sesuaikan dengan kebijakan perusahaan dan kebutuhanmu.</p>
        </article>
      </div>
    </main>
  );
}

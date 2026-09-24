import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ExperienceLetterGenerator from './ExperienceLetterGenerator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Generator Surat Pengalaman Kerja Gratis',
  description: 'Buat draft surat pengalaman kerja berdasarkan nama, jabatan, periode kerja, dan tanggung jawab.',
  alternates: { canonical: '/generator-surat-pengalaman-kerja' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generator Surat Pengalaman Kerja KerjaTools',
    url: siteUrl('/generator-surat-pengalaman-kerja'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Generator draft surat pengalaman kerja gratis.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Generator Surat Pengalaman Kerja' }]} />
        <header className="tool-head">
          <span className="eyebrow">Generator dokumen</span>
          <h1>Generator Surat Pengalaman Kerja</h1>
          <p>Buat draft surat yang bisa disesuaikan HR atau perusahaan sebelum diterbitkan resmi.</p>
        </header>
        <ExperienceLetterGenerator />
        <article className="content seo-content">
          <h2>Draft bukan surat resmi</h2>
          <p>KerjaTools membantu menyusun format awal. Validitas surat pengalaman kerja tetap bergantung pada penerbitan dan pengesahan perusahaan.</p>
          <h2>Gunakan deskripsi tanggung jawab yang konkret</h2>
          <p>Sebutkan fungsi utama pekerjaan secara singkat tanpa memasukkan informasi rahasia perusahaan atau data sensitif klien.</p>
        </article>
      </div>
    </main>
  );
}

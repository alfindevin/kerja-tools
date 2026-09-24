import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import SalaryNegotiationGenerator from './SalaryNegotiationGenerator';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Generator Email Negosiasi Gaji Gratis',
  description: 'Buat draft email negosiasi atau penyesuaian gaji yang profesional berdasarkan jabatan, target gaji, dan pencapaian.',
  alternates: { canonical: '/generator-negosiasi-gaji' }
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Generator Negosiasi Gaji KerjaTools',
    url: siteUrl('/generator-negosiasi-gaji'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    inLanguage: 'id-ID',
    description: 'Generator email negosiasi gaji gratis.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
  };

  return (
    <main className="tool-shell">
      <div className="container">
        <JsonLd data={schema} />
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Generator Negosiasi Gaji' }]} />
        <header className="tool-head">
          <span className="eyebrow">Generator karier</span>
          <h1>Generator Email Negosiasi Gaji</h1>
          <p>Susun permintaan penyesuaian gaji dengan fokus pada kontribusi, angka, dan ruang diskusi.</p>
        </header>
        <SalaryNegotiationGenerator />
        <article className="content seo-content">
          <h2>Fokus pada kontribusi, bukan sekadar kebutuhan pribadi</h2>
          <p>Email yang kuat menjelaskan perubahan tanggung jawab, hasil kerja yang terukur, dan alasan profesional untuk membuka diskusi kompensasi.</p>
          <h2>Gunakan target sebagai titik diskusi</h2>
          <p>Angka target dapat membantu memperjelas harapan, tetapi tetap beri ruang untuk paket kompensasi atau bentuk penyesuaian lain.</p>
        </article>
      </div>
    </main>
  );
}

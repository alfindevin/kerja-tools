import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ToolSearch from '@/components/ToolSearch';
import { siteUrl } from '@/lib/site';
import { tools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'KerjaTools — Kalkulator & Tools Kerja Gratis',
  description: 'Kalkulator THR, lembur, prorata gaji, kenaikan gaji, gaji bersih, dan panduan kerja gratis untuk pekerja Indonesia.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'KerjaTools — Kalkulator & Tools Kerja Gratis',
    description: 'Tools praktis untuk membantu urusan kerja, gaji, THR, lembur, dan prorata.',
    url: '/',
    type: 'website'
  }
};

const guides = [
  { href: '/panduan/thr-2026', title: 'THR 2026: aturan dan cara cek estimasi' },
  { href: '/panduan/cara-menghitung-thr', title: 'Cara menghitung THR + contoh' },
  { href: '/panduan/thr-karyawan-belum-setahun', title: 'THR karyawan belum setahun' }
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KerjaTools',
    alternateName: ['Kerja Tools', 'KerjaTools Indonesia'],
    url: siteUrl(),
    description: 'Kalkulator dan panduan kerja gratis untuk pekerja Indonesia.',
    inLanguage: 'id-ID'
  };

  return (
    <main>
      <JsonLd data={schema} />
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Gratis • Cepat • Tanpa login</span>
          <h1>Urusan kerja, jadi lebih gampang.</h1>
          <p>KerjaTools membantu pekerja Indonesia menghitung THR, lembur, prorata gaji, kenaikan gaji, take-home pay, dan memahami urusan kerja sehari-hari.</p>
          <ToolSearch />
        </div>
      </section>

      <section className="section" id="tools">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="mini-label">Utility hub</span>
              <h2>Pilih tool yang kamu butuhkan</h2>
            </div>
            <span className="tool-count">{tools.length} tools gratis</span>
          </div>
          <div className="grid">
            {tools.map((tool) => (
              <Link className="card" href={tool.href} key={tool.href}>
                <div className="icon">{tool.icon}</div>
                <span className="mini-label card-category">{tool.category}</span>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <span className="tag">Buka tool →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="mini-label">Belajar sebelum menghitung</span>
              <h2>Panduan populer</h2>
            </div>
            <Link className="tag" href="/panduan">Lihat semua panduan →</Link>
          </div>
          <div className="grid">
            {guides.map((guide) => (
              <Link className="card" href={guide.href} key={guide.href}>
                <span className="mini-label">Panduan THR</span>
                <h3>{guide.title}</h3>
                <p>Penjelasan praktis, contoh, dan tautan ke sumber resmi.</p>
                <span className="tag">Baca →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="tentang">
        <div className="container content">
          <span className="mini-label">Transparan</span>
          <h2>Bukan sekadar angka.</h2>
          <p>KerjaTools menjelaskan asumsi dan sumber yang dipakai. Tool yang terkait regulasi dilengkapi rujukan resmi, sementara kalkulator yang bersifat matematis menjelaskan batasannya.</p>
          <div className="text-links">
            <Link href="/tentang">Tentang KerjaTools →</Link>
            <Link href="/metodologi">Metodologi & sumber →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

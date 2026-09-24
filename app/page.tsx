import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'KerjaTools — Kalkulator & Tools Kerja Gratis',
  description: 'Kalkulator THR, kenaikan gaji, gaji bersih, dan panduan kerja gratis untuk pekerja Indonesia.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'KerjaTools — Kalkulator & Tools Kerja Gratis',
    description: 'Tools praktis untuk membantu urusan kerja, gaji, dan THR.',
    url: '/',
    type: 'website'
  }
};

const tools = [
  { href: '/kalkulator-thr', icon: '🎁', title: 'Kalkulator THR', desc: 'Estimasi THR berdasarkan masa kerja dan upah bulanan.' },
  { href: '/kalkulator-kenaikan-gaji', icon: '📈', title: 'Kenaikan Gaji', desc: 'Lihat nominal kenaikan, persentase, dan gaji baru dalam hitungan detik.' },
  { href: '/kalkulator-gaji-bersih', icon: '💸', title: 'Gaji Bersih', desc: 'Estimasi take-home pay dari gaji, tunjangan, dan potongan yang kamu masukkan.' }
];

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
          <p>KerjaTools membantu pekerja Indonesia menghitung THR, kenaikan gaji, take-home pay, dan memahami urusan kerja sehari-hari.</p>
          <div className="searchbox"><span>⌕</span><input aria-label="Cari tool" placeholder="Cari: THR, gaji, resign, cuti..." disabled /></div>
        </div>
      </section>

      <section className="section" id="tools">
        <div className="container">
          <h2>Mulai dari yang kamu butuhkan</h2>
          <div className="grid">
            {tools.map((tool) => (
              <Link className="card" href={tool.href} key={tool.href}>
                <div className="icon">{tool.icon}</div>
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
          <h2>Satu tempat untuk tool kerja sehari-hari</h2>
          <p>KerjaTools menggabungkan kalkulator dan panduan yang saling terhubung, supaya kamu bisa memahami konteksnya lalu langsung menghitung tanpa pindah-pindah situs.</p>
        </div>
      </section>
    </main>
  );
}

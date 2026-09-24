import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { thrGuides } from '@/lib/thrGuides';

export const metadata: Metadata = {
  title: 'Panduan Kerja, Gaji, THR & Lembur',
  description: 'Kumpulan panduan praktis seputar THR, gaji, lembur, prorata, dan kebutuhan kerja untuk pekerja Indonesia.',
  alternates: { canonical: '/panduan' }
};

const extraGuides = [
  {
    href: '/panduan/cara-menghitung-lembur',
    eyebrow: 'Panduan lembur',
    title: 'Cara Menghitung Lembur 2026',
    description: 'Rumus 1/173, koefisien hari kerja, dan contoh perhitungan.'
  },
  {
    href: '/panduan/cara-menghitung-gaji-prorata',
    eyebrow: 'Panduan gaji',
    title: 'Cara Menghitung Gaji Prorata',
    description: 'Contoh perhitungan ketika masuk atau berhenti kerja di tengah periode.'
  }
];

export default function PanduanPage() {
  return (
    <main className="tool-shell">
      <div className="container">
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Panduan' }]} />
        <header className="tool-head">
          <span className="eyebrow">Pusat panduan</span>
          <h1>Panduan kerja yang langsung bisa dipakai</h1>
          <p>Penjelasan ringkas dan praktis yang terhubung langsung ke tool KerjaTools.</p>
        </header>

        <section className="guide-grid">
          {extraGuides.map((guide) => (
            <Link className="card" href={guide.href} key={guide.href}>
              <span className="mini-label">{guide.eyebrow}</span>
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <span className="tag">Baca panduan →</span>
            </Link>
          ))}

          {thrGuides.map((guide) => (
            <Link className="card" href={`/panduan/${guide.slug}`} key={guide.slug}>
              <span className="mini-label">{guide.eyebrow}</span>
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <span className="tag">Baca panduan →</span>
            </Link>
          ))}
        </section>

        <div className="content cta-box">
          <h2>Mau langsung menghitung?</h2>
          <p>KerjaTools sekarang punya kalkulator THR, lembur, prorata, pesangon, gaji harian/jam, dan tool kerja lainnya.</p>
          <Link className="primary-link" href="/#tools">Lihat semua tool →</Link>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { thrGuides } from '@/lib/thrGuides';

export const metadata: Metadata = {
  title: 'Panduan Kerja & THR',
  description: 'Kumpulan panduan praktis seputar THR, gaji, dan kebutuhan kerja untuk pekerja Indonesia.',
  alternates: { canonical: '/panduan' }
};

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
          <p>Kalau kamu sudah tahu upah dan masa kerja, gunakan Kalkulator THR untuk mendapatkan estimasi dalam beberapa detik.</p>
          <Link className="primary-link" href="/kalkulator-thr">Buka Kalkulator THR →</Link>
        </div>
      </div>
    </main>
  );
}

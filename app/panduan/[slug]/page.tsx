import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { getThrGuide, thrGuides } from '@/lib/thrGuides';
import { siteUrl } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return thrGuides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getThrGuide(slug);
  if (!guide) return {};

  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: `/panduan/${guide.slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.description,
      type: 'article',
      url: `/panduan/${guide.slug}`
    }
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getThrGuide(slug);
  if (!guide) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: siteUrl(`/panduan/${guide.slug}`),
    datePublished: '2026-09-25',
    dateModified: '2026-09-25',
    author: { '@type': 'Organization', name: 'KerjaTools' },
    publisher: { '@type': 'Organization', name: 'KerjaTools' }
  };

  const related = thrGuides.filter((item) => item.slug !== guide.slug).slice(0, 3);

  return (
    <main className="tool-shell">
      <div className="container article-wrap">
        <JsonLd data={articleSchema} />
        <Breadcrumbs items={[
          { name: 'KerjaTools', href: '/' },
          { name: 'Panduan', href: '/panduan' },
          { name: guide.title }
        ]} />

        <article>
          <header className="article-head">
            <span className="eyebrow">{guide.eyebrow}</span>
            <h1>{guide.title}</h1>
            <p className="article-lead">{guide.intro}</p>
            <p className="article-meta">Diperbarui 25 September 2026 • ± 3 menit baca</p>
          </header>

          <div className="article-content">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section className="inline-cta">
              <h2>Hitung THR kamu sekarang</h2>
              <p>Masukkan upah dan masa kerja. KerjaTools akan menghitung estimasinya otomatis.</p>
              <Link className="primary-link" href="/kalkulator-thr">Gunakan Kalkulator THR →</Link>
            </section>

            <section>
              <h2>Sumber resmi</h2>
              <p>Informasi dasar perhitungan mengacu pada Permenaker No. 6 Tahun 2016. Untuk pelaksanaan tahun 2026, Kemnaker menerbitkan Surat Edaran No. M/3/HK.04.00/III/2026.</p>
              <div className="source-links">
                <a href="https://jdih.kemnaker.go.id/peraturan/detail/1207/peraturan-menteri-nomor-6-tahun-2016" target="_blank" rel="noreferrer">Permenaker No. 6 Tahun 2016 ↗</a>
                <a href="https://jdih.kemnaker.go.id/peraturan/detail/2983/surat-edaran-menteri-ketenagakerjaan-nomor-3-tahun-2026" target="_blank" rel="noreferrer">SE THR Tahun 2026 ↗</a>
              </div>
              <p className="disclaimer">Konten KerjaTools bersifat informasi dan estimasi, bukan nasihat hukum. Untuk sengketa atau kasus khusus, gunakan dokumen resmi dan bantuan pihak yang berwenang.</p>
            </section>
          </div>
        </article>

        <aside className="related-guides">
          <h2>Panduan terkait</h2>
          <div className="guide-grid">
            {related.map((item) => (
              <Link className="card" href={`/panduan/${item.slug}`} key={item.slug}>
                <span className="mini-label">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Tentang KerjaTools',
  description: 'Tentang KerjaTools, situs utility gratis untuk membantu pekerja Indonesia menghitung dan memahami urusan kerja sehari-hari.',
  alternates: { canonical: '/tentang' }
};

export default function TentangPage() {
  return (
    <main className="tool-shell">
      <div className="container article-wrap">
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Tentang' }]} />
        <header className="article-head">
          <span className="eyebrow">Tentang KerjaTools</span>
          <h1>Tool kerja yang sederhana, transparan, dan gratis.</h1>
          <p className="article-lead">KerjaTools dibuat untuk membantu pekerja Indonesia menyelesaikan hitungan dan kebutuhan kerja kecil tanpa harus membuka spreadsheet atau mencari rumus dari banyak sumber.</p>
        </header>

        <article className="article-content">
          <section>
            <h2>Apa yang KerjaTools buat?</h2>
            <p>Kami membuat kalkulator dan panduan praktis untuk topik seperti THR, gaji, lembur, dan kebutuhan kerja sehari-hari. Setiap tool dirancang agar bisa digunakan langsung tanpa login.</p>
          </section>
          <section>
            <h2>Prinsip kami</h2>
            <ul>
              <li>Rumus yang terkait regulasi diberi sumber resmi dan tanggal pembaruan.</li>
              <li>Estimasi dibedakan dari perhitungan resmi perusahaan atau nasihat hukum.</li>
              <li>Tool dibuat ringan, mobile-first, dan tidak meminta data pribadi yang tidak diperlukan.</li>
            </ul>
          </section>
          <section>
            <h2>Bagaimana perhitungannya dibuat?</h2>
            <p>Kunjungi halaman <Link href="/metodologi">Metodologi KerjaTools</Link> untuk melihat cara kami memilih sumber dan membatasi asumsi kalkulator.</p>
          </section>
        </article>
      </div>
    </main>
  );
}

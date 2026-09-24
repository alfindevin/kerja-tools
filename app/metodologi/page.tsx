import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Metodologi & Sumber KerjaTools',
  description: 'Pelajari bagaimana KerjaTools menyusun rumus, memilih sumber resmi, dan memberi batasan pada hasil kalkulator.',
  alternates: { canonical: '/metodologi' }
};

export default function MetodologiPage() {
  return (
    <main className="tool-shell">
      <div className="container article-wrap">
        <Breadcrumbs items={[{ name: 'KerjaTools', href: '/' }, { name: 'Metodologi' }]} />
        <header className="article-head">
          <span className="eyebrow">Metodologi</span>
          <h1>Bagaimana KerjaTools menghitung.</h1>
          <p className="article-lead">Tujuannya bukan membuat angka terlihat pasti, tetapi membuat asumsi dan sumbernya mudah diperiksa.</p>
        </header>

        <article className="article-content">
          <section>
            <h2>1. Sumber resmi lebih dulu</h2>
            <p>Untuk tool yang berkaitan dengan ketenagakerjaan, KerjaTools memprioritaskan JDIH Kementerian Ketenagakerjaan, peraturan pemerintah, dan sumber pemerintah lain yang relevan.</p>
          </section>
          <section>
            <h2>2. Rumus disederhanakan secara eksplisit</h2>
            <p>Jika sebuah kasus membutuhkan data yang sangat spesifik, kalkulator hanya menghitung bagian yang dapat dipastikan dari input pengguna dan menjelaskan bagian yang belum dicakup.</p>
          </section>
          <section>
            <h2>3. Estimasi bukan keputusan resmi</h2>
            <p>Hasil KerjaTools tidak menggantikan slip payroll, kebijakan perusahaan, nasihat hukum, atau keputusan instansi berwenang.</p>
          </section>
          <section>
            <h2>4. Tanggal dan regulasi diperbarui</h2>
            <p>Halaman yang bergantung pada regulasi menyebut sumber utamanya. Jika aturan berubah, rumus dan penjelasan perlu diperbarui sebelum dianggap berlaku untuk periode baru.</p>
          </section>
        </article>
      </div>
    </main>
  );
}

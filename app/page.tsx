import Link from 'next/link';

const tools = [
  { href: '/kalkulator-thr', icon: '🎁', title: 'Kalkulator THR', desc: 'Estimasi THR berdasarkan masa kerja dan upah bulanan.' },
  { href: '/kalkulator-kenaikan-gaji', icon: '📈', title: 'Kenaikan Gaji', desc: 'Lihat nominal kenaikan, persentase, dan gaji baru dalam hitungan detik.' },
  { href: '/kalkulator-gaji-bersih', icon: '💸', title: 'Gaji Bersih', desc: 'Estimasi take-home pay dari gaji, tunjangan, dan potongan yang kamu masukkan.' }
];

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kerja-tools.vercel.app';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KerjaTools',
    url: siteUrl,
    description: 'Tools gratis untuk pekerja Indonesia.'
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Gratis • Cepat • Tanpa login</span>
          <h1>Urusan kerja, jadi lebih gampang.</h1>
          <p>KerjaTools membantu pekerja Indonesia menghitung, mengecek, dan menyelesaikan hal-hal kecil yang sering bikin ribet.</p>
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
      <section className="section" id="tentang">
        <div className="container content">
          <h2>Satu tempat untuk tool kerja sehari-hari</h2>
          <p>Versi awal KerjaTools fokus pada kalkulator yang sering dibutuhkan pekerja. Berikutnya bisa ditambah generator surat resign, email cuti, simulasi lembur, ATS keyword checker, dan tool karier lainnya.</p>
        </div>
      </section>
    </main>
  );
}

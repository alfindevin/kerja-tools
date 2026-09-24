import type { Metadata } from 'next';
import SalaryRaiseCalculator from './SalaryRaiseCalculator';

export const metadata: Metadata = {
  title: 'Kalkulator Kenaikan Gaji',
  description: 'Hitung nominal kenaikan dan gaji baru berdasarkan persentase kenaikan gaji.'
};

export default function Page() {
  return <main className="tool-shell"><div className="container">
    <header className="tool-head"><span className="eyebrow">Kalkulator kerja</span><h1>Kalkulator kenaikan gaji</h1><p>Cek berapa nominal tambahan dan gaji baru setelah kenaikan.</p></header>
    <SalaryRaiseCalculator />
    <article className="content"><h2>Contoh cepat</h2><p>Jika gaji Rp6.000.000 naik 10%, kenaikannya Rp600.000 sehingga gaji baru menjadi Rp6.600.000.</p></article>
  </div></main>;
}

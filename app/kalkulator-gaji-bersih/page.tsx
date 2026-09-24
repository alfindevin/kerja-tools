import type { Metadata } from 'next';
import TakeHomePayCalculator from './TakeHomePayCalculator';

export const metadata: Metadata = {
  title: 'Kalkulator Gaji Bersih / Take-Home Pay',
  description: 'Hitung estimasi gaji bersih dari gaji pokok, tunjangan, dan potongan bulanan.'
};

export default function Page() {
  return <main className="tool-shell"><div className="container">
    <header className="tool-head"><span className="eyebrow">Kalkulator kerja</span><h1>Kalkulator gaji bersih</h1><p>Estimasi take-home pay berdasarkan angka pada slip gaji kamu.</p></header>
    <TakeHomePayCalculator />
    <article className="content"><h2>Kenapa potongan dimasukkan manual?</h2><p>Komponen pajak dan jaminan sosial dapat berbeda menurut status, batas upah, dan kondisi masing-masing pekerja. Versi awal ini sengaja memakai total potongan dari slip gaji agar hasil tidak berpura-pura menjadi kalkulasi pajak resmi.</p><p className="disclaimer">Hasil bersifat estimasi dan tidak menggantikan payroll resmi.</p></article>
  </div></main>;
}

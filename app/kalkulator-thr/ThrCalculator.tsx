'use client';
import { useMemo, useState } from 'react';

const rupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });

export default function ThrCalculator() {
  const [wage, setWage] = useState(6000000);
  const [months, setMonths] = useState(12);
  const result = useMemo(() => {
    if (months < 1 || wage <= 0) return 0;
    if (months >= 12) return wage;
    return (months / 12) * wage;
  }, [wage, months]);

  return <div className="tool-grid">
    <div className="panel">
      <div className="form-row"><label>Upah 1 bulan</label><span className="hint">Upah pokok + tunjangan tetap, atau upah tanpa tunjangan.</span><input type="number" min="0" value={wage} onChange={e => setWage(Number(e.target.value))} /></div>
      <div className="form-row"><label>Masa kerja (bulan)</label><span className="hint">Minimal 1 bulan untuk memperoleh THR menurut Permenaker No. 6/2016.</span><input type="number" min="0" max="600" value={months} onChange={e => setMonths(Number(e.target.value))} /></div>
      <div className="info">Rumus: masa kerja ≥12 bulan = 1 bulan upah. Masa kerja 1–&lt;12 bulan = masa kerja ÷ 12 × 1 bulan upah.</div>
    </div>
    <div className="result"><small>Estimasi THR</small><strong>{rupiah.format(result)}</strong><p>Hasil ini merupakan estimasi berdasarkan input dan formula umum dalam Permenaker No. 6/2016.</p></div>
  </div>;
}

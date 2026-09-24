'use client';
import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

const rupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });

export default function SalaryRaiseCalculator() {
  const [salary, setSalary] = useState(6000000);
  const [percent, setPercent] = useState(10);
  const { increase, newSalary } = useMemo(() => {
    const increase = salary * (percent / 100);
    return { increase, newSalary: salary + increase };
  }, [salary, percent]);

  const text = `Gaji ${rupiah.format(salary)} naik ${percent}% = bertambah ${rupiah.format(increase)}, sehingga gaji baru menjadi ${rupiah.format(newSalary)}. Dihitung di KerjaTools.`;

  return <div className="tool-grid"><div className="panel">
    <div className="form-row"><label>Gaji sekarang</label><input type="number" min="0" value={salary} onChange={e => setSalary(Number(e.target.value))} /></div>
    <div className="form-row"><label>Persentase kenaikan (%)</label><input type="number" step="0.1" value={percent} onChange={e => setPercent(Number(e.target.value))} /></div>
    <div className="info">Kenaikan nominal: <strong>{rupiah.format(increase)}</strong></div>
  </div><div className="result"><small>Gaji setelah kenaikan</small><strong>{rupiah.format(newSalary)}</strong><p>Dari {rupiah.format(salary)} dengan kenaikan {percent || 0}%.</p><ResultActions text={text} /></div></div>;
}

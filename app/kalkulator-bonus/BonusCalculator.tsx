'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
});

type Mode = 'percent' | 'months';

export default function BonusCalculator() {
  const [salary, setSalary] = useState(6000000);
  const [mode, setMode] = useState<Mode>('percent');
  const [value, setValue] = useState(50);
  const [deduction, setDeduction] = useState(0);

  const result = useMemo(() => {
    const gross = mode === 'percent'
      ? salary * (Math.max(0, value) / 100)
      : salary * Math.max(0, value);
    const netEstimate = Math.max(0, gross - Math.max(0, deduction));
    return { gross, netEstimate };
  }, [salary, mode, value, deduction]);

  const text = `Simulasi bonus di KerjaTools: bonus kotor ${rupiah.format(result.gross)}, potongan manual ${rupiah.format(deduction)}, estimasi setelah potongan ${rupiah.format(result.netEstimate)}.`;

  return (
    <div className="tool-grid">
      <div className="panel">
        <div className="form-row">
          <label>Gaji bulanan</label>
          <input type="number" min="0" value={salary} onChange={(e) => setSalary(Number(e.target.value))} />
        </div>
        <div className="form-row">
          <label>Metode bonus</label>
          <select value={mode} onChange={(e) => {
            const next = e.target.value as Mode;
            setMode(next);
            setValue(next === 'percent' ? 50 : 1);
          }}>
            <option value="percent">Persentase dari gaji</option>
            <option value="months">Kelipatan bulan gaji</option>
          </select>
        </div>
        <div className="form-row">
          <label>{mode === 'percent' ? 'Bonus (%)' : 'Kelipatan gaji'}</label>
          <span className="hint">{mode === 'percent' ? 'Contoh: 50 berarti 50% dari gaji.' : 'Contoh: 1,5 berarti bonus 1,5 kali gaji bulanan.'}</span>
          <input type="number" min="0" step="0.1" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        </div>
        <div className="form-row">
          <label>Potongan manual (opsional)</label>
          <span className="hint">Masukkan potongan jika kamu sudah mengetahui nilainya.</span>
          <input type="number" min="0" value={deduction} onChange={(e) => setDeduction(Number(e.target.value))} />
        </div>
        <div className="info">Bonus perusahaan tidak sama dengan THR. Besaran bonus mengikuti kebijakan/perjanjian perusahaan yang berlaku.</div>
      </div>

      <div className="result">
        <small>Simulasi bonus kotor</small>
        <strong>{rupiah.format(result.gross)}</strong>
        <div className="result-breakdown">
          <span>Potongan manual <b>{rupiah.format(Math.max(0, deduction))}</b></span>
          <span>Setelah potongan <b>{rupiah.format(result.netEstimate)}</b></span>
        </div>
        <p>Ini simulasi kebijakan, bukan penetapan bonus yang wajib dibayar perusahaan.</p>
        <ResultActions text={text} />
      </div>
    </div>
  );
}

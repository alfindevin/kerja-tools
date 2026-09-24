'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
});

export default function ProrataCalculator() {
  const [monthlySalary, setMonthlySalary] = useState(6000000);
  const [workedDays, setWorkedDays] = useState(10);
  const [workingDays, setWorkingDays] = useState(22);

  const safeTotal = Math.max(1, workingDays);
  const safeWorked = Math.min(Math.max(0, workedDays), safeTotal);
  const dailyRate = monthlySalary / safeTotal;
  const result = useMemo(() => dailyRate * safeWorked, [dailyRate, safeWorked]);

  const shareText = `Estimasi gaji prorata saya di KerjaTools: ${rupiah.format(result)} untuk ${safeWorked} dari ${safeTotal} hari kerja, dari gaji bulanan ${rupiah.format(monthlySalary)}.`;

  return (
    <div className="tool-grid">
      <div className="panel">
        <div className="form-row">
          <label>Gaji bulanan</label>
          <input type="number" min="0" value={monthlySalary} onChange={(e) => setMonthlySalary(Number(e.target.value))} />
        </div>
        <div className="form-row">
          <label>Hari kerja yang dijalani</label>
          <span className="hint">Contoh: mulai bekerja tanggal tengah bulan dan masuk 10 hari kerja.</span>
          <input type="number" min="0" value={workedDays} onChange={(e) => setWorkedDays(Number(e.target.value))} />
        </div>
        <div className="form-row">
          <label>Total hari kerja periode tersebut</label>
          <span className="hint">Masukkan jumlah hari kerja yang dipakai perusahaan untuk periode itu.</span>
          <input type="number" min="1" value={workingDays} onChange={(e) => setWorkingDays(Number(e.target.value))} />
        </div>
        <div className="info">
          Nilai per hari: <strong>{rupiah.format(dailyRate)}</strong><br />
          Rumus: gaji bulanan ÷ total hari kerja × hari yang dijalani.
        </div>
      </div>

      <div className="result">
        <small>Estimasi gaji prorata</small>
        <strong>{rupiah.format(result)}</strong>
        <p>{safeWorked} dari {safeTotal} hari kerja.</p>
        <ResultActions text={shareText} />
      </div>
    </div>
  );
}

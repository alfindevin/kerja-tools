'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
});

const ptkpMap: Record<string, number> = {
  'TK/0': 54000000,
  'TK/1': 58500000,
  'TK/2': 63000000,
  'TK/3': 67500000,
  'K/0': 58500000,
  'K/1': 63000000,
  'K/2': 67500000,
  'K/3': 72000000
};

function progressiveTax(pkp: number) {
  let remaining = Math.max(0, pkp);
  let tax = 0;

  const bands = [
    { cap: 60000000, rate: 0.05 },
    { cap: 190000000, rate: 0.15 },
    { cap: 250000000, rate: 0.25 },
    { cap: 4500000000, rate: 0.30 },
    { cap: Infinity, rate: 0.35 }
  ];

  for (const band of bands) {
    if (remaining <= 0) break;
    const taxable = Math.min(remaining, band.cap);
    tax += taxable * band.rate;
    remaining -= taxable;
  }
  return tax;
}

export default function AnnualTaxCalculator() {
  const [annualNetIncome, setAnnualNetIncome] = useState(120000000);
  const [status, setStatus] = useState('TK/0');
  const [taxCredit, setTaxCredit] = useState(0);

  const values = useMemo(() => {
    const ptkp = ptkpMap[status] || 54000000;
    const pkpRaw = Math.max(0, annualNetIncome - ptkp);
    const pkp = Math.floor(pkpRaw / 1000) * 1000;
    const tax = progressiveTax(pkp);
    const afterCredit = Math.max(0, tax - Math.max(0, taxCredit));
    return { ptkp, pkp, tax, afterCredit };
  }, [annualNetIncome, status, taxCredit]);

  const text = `Estimasi PPh tahunan di KerjaTools: penghasilan neto setahun ${rupiah.format(annualNetIncome)}, PTKP ${status} ${rupiah.format(values.ptkp)}, PKP ${rupiah.format(values.pkp)}, estimasi PPh terutang ${rupiah.format(values.tax)}.`;

  return (
    <div className="tool-grid">
      <div className="panel">
        <div className="form-row">
          <label>Penghasilan neto setahun</label>
          <span className="hint">Gunakan penghasilan neto tahunan, bukan sekadar gaji bruto bulanan.</span>
          <input type="number" min="0" value={annualNetIncome} onChange={(e) => setAnnualNetIncome(Number(e.target.value))} />
        </div>

        <div className="form-row">
          <label>Status PTKP</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {Object.entries(ptkpMap).map(([key, value]) => (
              <option value={key} key={key}>{key} — {rupiah.format(value)}</option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label>Kredit / PPh yang sudah dipotong (opsional)</label>
          <span className="hint">Masukkan hanya jika kamu sudah mengetahui total kredit pajaknya.</span>
          <input type="number" min="0" value={taxCredit} onChange={(e) => setTaxCredit(Number(e.target.value))} />
        </div>

        <div className="notice">
          Ini estimasi PPh tahunan berbasis PKP dan tarif progresif. Ini bukan kalkulator pemotongan PPh 21 bulanan TER dan bukan pengganti bukti potong/SPT.
        </div>
      </div>

      <div className="result">
        <small>Estimasi PPh terutang setahun</small>
        <strong>{rupiah.format(values.tax)}</strong>
        <div className="result-breakdown">
          <span>PTKP {status} <b>{rupiah.format(values.ptkp)}</b></span>
          <span>PKP dibulatkan <b>{rupiah.format(values.pkp)}</b></span>
          <span>Setelah kredit input <b>{rupiah.format(values.afterCredit)}</b></span>
        </div>
        <p>Untuk payroll bulanan, mekanisme TER dapat menghasilkan pola pemotongan yang berbeda sepanjang tahun.</p>
        <ResultActions text={text} />
      </div>
    </div>
  );
}

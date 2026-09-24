'use client';
import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

const rupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });

export default function TakeHomePayCalculator() {
  const [salary, setSalary] = useState(6000000);
  const [allowance, setAllowance] = useState(500000);
  const [deductions, setDeductions] = useState(350000);
  const result = useMemo(() => Math.max(0, salary + allowance - deductions), [salary, allowance, deductions]);

  const text = `Estimasi take-home pay saya di KerjaTools: ${rupiah.format(result)} dari gaji pokok ${rupiah.format(salary)}, tunjangan ${rupiah.format(allowance)}, dan potongan ${rupiah.format(deductions)}.`;

  return <div className="tool-grid"><div className="panel">
    <div className="form-row"><label>Gaji pokok</label><input type="number" min="0" value={salary} onChange={e => setSalary(Number(e.target.value))} /></div>
    <div className="form-row"><label>Total tunjangan</label><span className="hint">Contoh: makan, transportasi, tunjangan tetap lainnya.</span><input type="number" min="0" value={allowance} onChange={e => setAllowance(Number(e.target.value))} /></div>
    <div className="form-row"><label>Total potongan</label><span className="hint">Masukkan total pajak, BPJS, pinjaman, atau potongan lain dari slip gaji.</span><input type="number" min="0" value={deductions} onChange={e => setDeductions(Number(e.target.value))} /></div>
  </div><div className="result"><small>Estimasi take-home pay</small><strong>{rupiah.format(result)}</strong><p>Gaji pokok + tunjangan − total potongan.</p><ResultActions text={text} /></div></div>;
}

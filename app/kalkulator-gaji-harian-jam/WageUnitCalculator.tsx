'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
});

export default function WageUnitCalculator() {
  const [monthlyWage, setMonthlyWage] = useState(6000000);
  const [workDays, setWorkDays] = useState<'5' | '6'>('5');

  const values = useMemo(() => {
    const dailyDivisor = workDays === '5' ? 21 : 25;
    return {
      dailyDivisor,
      daily: monthlyWage / dailyDivisor,
      partTimeHourly: monthlyWage / 126,
      overtimeHourly: monthlyWage / 173
    };
  }, [monthlyWage, workDays]);

  const text = `Dari upah bulanan ${rupiah.format(monthlyWage)}: estimasi upah harian ${rupiah.format(values.daily)} (pola ${workDays} hari kerja), formula upah per jam paruh waktu ${rupiah.format(values.partTimeHourly)}, dan dasar upah sejam lembur ${rupiah.format(values.overtimeHourly)}.`;

  return (
    <div className="tool-grid">
      <div className="panel">
        <div className="form-row">
          <label>Upah bulanan</label>
          <input type="number" min="0" value={monthlyWage} onChange={(e) => setMonthlyWage(Number(e.target.value))} />
        </div>
        <div className="form-row">
          <label>Pola hari kerja</label>
          <select value={workDays} onChange={(e) => setWorkDays(e.target.value as '5' | '6')}>
            <option value="5">5 hari kerja per minggu</option>
            <option value="6">6 hari kerja per minggu</option>
          </select>
        </div>
        <div className="info">
          Upah harian menggunakan pembagi <strong>{values.dailyDivisor}</strong>. Formula upah per jam paruh waktu dan dasar upah lembur memakai pembagi yang berbeda karena tujuan hukumnya berbeda.
        </div>
      </div>

      <div className="result">
        <small>Estimasi upah harian</small>
        <strong>{rupiah.format(values.daily)}</strong>
        <div className="result-breakdown">
          <span>Per jam paruh waktu <b>{rupiah.format(values.partTimeHourly)}</b></span>
          <span>Dasar sejam lembur <b>{rupiah.format(values.overtimeHourly)}</b></span>
        </div>
        <p>Jangan menyamakan formula /126 dengan /173 karena digunakan untuk konteks yang berbeda.</p>
        <ResultActions text={text} />
      </div>
    </div>
  );
}

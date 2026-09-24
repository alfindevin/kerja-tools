'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
});

type OvertimeType = 'workday' | 'holiday5' | 'holiday6' | 'short6';

function overtimeFactor(type: OvertimeType, hours: number) {
  const h = Math.max(0, hours);
  if (type === 'workday') {
    return Math.min(h, 1) * 1.5 + Math.max(0, h - 1) * 2;
  }
  if (type === 'holiday5') {
    return Math.min(h, 8) * 2 + Math.min(Math.max(h - 8, 0), 1) * 3 + Math.max(h - 9, 0) * 4;
  }
  if (type === 'holiday6') {
    return Math.min(h, 7) * 2 + Math.min(Math.max(h - 7, 0), 1) * 3 + Math.max(h - 8, 0) * 4;
  }
  return Math.min(h, 5) * 2 + Math.min(Math.max(h - 5, 0), 1) * 3 + Math.max(h - 6, 0) * 4;
}

function maxHours(type: OvertimeType) {
  if (type === 'workday') return 4;
  if (type === 'holiday5') return 12;
  if (type === 'holiday6') return 11;
  return 9;
}

export default function OvertimeCalculator() {
  const [monthlyWage, setMonthlyWage] = useState(6000000);
  const [hours, setHours] = useState(2);
  const [type, setType] = useState<OvertimeType>('workday');

  const safeHours = Math.min(Math.max(hours, 0), maxHours(type));
  const hourlyWage = monthlyWage > 0 ? monthlyWage / 173 : 0;
  const factor = overtimeFactor(type, safeHours);
  const result = useMemo(() => hourlyWage * factor, [hourlyWage, factor]);

  const labels: Record<OvertimeType, string> = {
    workday: 'Hari kerja biasa',
    holiday5: 'Istirahat/libur — pola 5 hari kerja',
    holiday6: 'Istirahat/libur — pola 6 hari kerja',
    short6: 'Libur jatuh pada hari kerja terpendek — pola 6 hari'
  };

  const shareText = `Estimasi upah lembur saya di KerjaTools: ${rupiah.format(result)} untuk ${safeHours} jam (${labels[type]}), dengan dasar upah bulanan ${rupiah.format(monthlyWage)}.`;

  return (
    <div className="tool-grid">
      <div className="panel">
        <div className="form-row">
          <label>Upah bulanan untuk dasar lembur</label>
          <span className="hint">Masukkan upah bulanan yang menjadi dasar perhitungan lembur.</span>
          <input type="number" min="0" value={monthlyWage} onChange={(e) => setMonthlyWage(Number(e.target.value))} />
        </div>
        <div className="form-row">
          <label>Jenis hari</label>
          <select value={type} onChange={(e) => setType(e.target.value as OvertimeType)}>
            <option value="workday">Hari kerja biasa</option>
            <option value="holiday5">Hari istirahat/libur — 5 hari kerja</option>
            <option value="holiday6">Hari istirahat/libur — 6 hari kerja</option>
            <option value="short6">Libur pada hari kerja terpendek — 6 hari kerja</option>
          </select>
        </div>
        <div className="form-row">
          <label>Jumlah jam lembur</label>
          <span className="hint">Maksimum input untuk pilihan ini: {maxHours(type)} jam.</span>
          <input
            type="number"
            min="0"
            max={maxHours(type)}
            step="1"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
          />
        </div>
        {hours > maxHours(type) && <div className="notice">Input dihitung sampai {maxHours(type)} jam untuk skenario ini.</div>}
        <div className="info">
          Upah sejam: <strong>{rupiah.format(hourlyWage)}</strong><br />
          Faktor lembur: <strong>{factor}× upah sejam</strong>
        </div>
      </div>

      <div className="result">
        <small>Estimasi upah lembur</small>
        <strong>{rupiah.format(result)}</strong>
        <p>{safeHours} jam • {labels[type]}</p>
        <ResultActions text={shareText} />
      </div>
    </div>
  );
}

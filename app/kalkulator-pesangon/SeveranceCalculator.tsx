'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
});

function severanceMonths(years: number) {
  if (years < 1) return 1;
  if (years < 2) return 2;
  if (years < 3) return 3;
  if (years < 4) return 4;
  if (years < 5) return 5;
  if (years < 6) return 6;
  if (years < 7) return 7;
  if (years < 8) return 8;
  return 9;
}

function serviceAwardMonths(years: number) {
  if (years < 3) return 0;
  if (years < 6) return 2;
  if (years < 9) return 3;
  if (years < 12) return 4;
  if (years < 15) return 5;
  if (years < 18) return 6;
  if (years < 21) return 7;
  if (years < 24) return 8;
  return 10;
}

export default function SeveranceCalculator() {
  const [monthlyWage, setMonthlyWage] = useState(6000000);
  const [years, setYears] = useState(5);
  const [severanceFactor, setSeveranceFactor] = useState(1);
  const [awardFactor, setAwardFactor] = useState(1);
  const [otherRights, setOtherRights] = useState(0);

  const result = useMemo(() => {
    const upMonths = severanceMonths(Math.max(0, years));
    const upmkMonths = serviceAwardMonths(Math.max(0, years));
    const baseSeverance = monthlyWage * upMonths;
    const baseAward = monthlyWage * upmkMonths;
    const adjustedSeverance = baseSeverance * Math.max(0, severanceFactor);
    const adjustedAward = baseAward * Math.max(0, awardFactor);

    return {
      upMonths,
      upmkMonths,
      baseSeverance,
      baseAward,
      adjustedSeverance,
      adjustedAward,
      total: adjustedSeverance + adjustedAward + Math.max(0, otherRights)
    };
  }, [monthlyWage, years, severanceFactor, awardFactor, otherRights]);

  const shareText = `Estimasi komponen PHK di KerjaTools: uang pesangon ${rupiah.format(result.adjustedSeverance)}, UPMK ${rupiah.format(result.adjustedAward)}, hak lain ${rupiah.format(otherRights)}, total estimasi ${rupiah.format(result.total)}.`;

  return (
    <div className="tool-grid">
      <div className="panel">
        <div className="form-row">
          <label>Upah bulanan sebagai dasar</label>
          <input type="number" min="0" value={monthlyWage} onChange={(e) => setMonthlyWage(Number(e.target.value))} />
        </div>

        <div className="form-row">
          <label>Masa kerja (tahun)</label>
          <input type="number" min="0" step="0.1" value={years} onChange={(e) => setYears(Number(e.target.value))} />
        </div>

        <div className="form-row">
          <label>Faktor uang pesangon</label>
          <span className="hint">Isi sesuai dasar/alasan PHK yang berlaku. Contoh: 0,5; 1; 2.</span>
          <input type="number" min="0" step="0.25" value={severanceFactor} onChange={(e) => setSeveranceFactor(Number(e.target.value))} />
        </div>

        <div className="form-row">
          <label>Faktor UPMK</label>
          <span className="hint">Default 1×. Ubah hanya jika dasar PHK yang relevan menentukan berbeda.</span>
          <input type="number" min="0" step="0.25" value={awardFactor} onChange={(e) => setAwardFactor(Number(e.target.value))} />
        </div>

        <div className="form-row">
          <label>Penggantian hak / komponen lain</label>
          <span className="hint">Masukkan nilai yang sudah kamu ketahui, misalnya cuti yang belum diambil atau hak lain dari perjanjian kerja.</span>
          <input type="number" min="0" value={otherRights} onChange={(e) => setOtherRights(Number(e.target.value))} />
        </div>

        <div className="info">
          Dasar Pasal 40: <strong>{result.upMonths} bulan upah</strong> untuk pesangon dan <strong>{result.upmkMonths} bulan upah</strong> untuk UPMK sebelum faktor alasan PHK diterapkan.
        </div>
      </div>

      <div className="result">
        <small>Total estimasi komponen</small>
        <strong>{rupiah.format(result.total)}</strong>
        <div className="result-breakdown">
          <span>Pesangon <b>{rupiah.format(result.adjustedSeverance)}</b></span>
          <span>UPMK <b>{rupiah.format(result.adjustedAward)}</b></span>
          <span>Hak lain <b>{rupiah.format(Math.max(0, otherRights))}</b></span>
        </div>
        <p>Faktor alasan PHK harus dicocokkan dengan ketentuan yang benar.</p>
        <ResultActions text={shareText} />
      </div>
    </div>
  );
}

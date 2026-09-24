'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

export default function LeaveBalanceCalculator() {
  const [entitlement, setEntitlement] = useState(12);
  const [carried, setCarried] = useState(0);
  const [used, setUsed] = useState(5);
  const [planned, setPlanned] = useState(2);

  const values = useMemo(() => {
    const total = Math.max(0, entitlement) + Math.max(0, carried);
    const remaining = Math.max(0, total - Math.max(0, used));
    const afterPlanned = Math.max(0, remaining - Math.max(0, planned));
    return { total, remaining, afterPlanned };
  }, [entitlement, carried, used, planned]);

  const text = `Saldo cuti saya di KerjaTools: hak tersedia ${values.total} hari, sudah dipakai ${Math.max(0, used)} hari, sisa ${values.remaining} hari, dan setelah rencana cuti ${Math.max(0, planned)} hari tersisa ${values.afterPlanned} hari.`;

  return (
    <div className="tool-grid">
      <div className="panel">
        <div className="form-row">
          <label>Hak cuti periode ini</label>
          <span className="hint">Default 12 hari. Ubah jika kebijakan perusahaan memberikan jumlah berbeda.</span>
          <input type="number" min="0" value={entitlement} onChange={(e) => setEntitlement(Number(e.target.value))} />
        </div>
        <div className="form-row">
          <label>Cuti yang dibawa dari periode sebelumnya</label>
          <span className="hint">Isi 0 jika perusahaan tidak menerapkan carry-over.</span>
          <input type="number" min="0" value={carried} onChange={(e) => setCarried(Number(e.target.value))} />
        </div>
        <div className="form-row">
          <label>Cuti yang sudah dipakai</label>
          <input type="number" min="0" value={used} onChange={(e) => setUsed(Number(e.target.value))} />
        </div>
        <div className="form-row">
          <label>Rencana cuti berikutnya</label>
          <input type="number" min="0" value={planned} onChange={(e) => setPlanned(Number(e.target.value))} />
        </div>
        <div className="info">Hak minimum cuti tahunan menurut ketentuan umum adalah 12 hari kerja setelah bekerja 12 bulan terus-menerus. Pelaksanaannya mengikuti aturan di tempat kerja.</div>
      </div>

      <div className="result">
        <small>Sisa cuti saat ini</small>
        <strong>{values.remaining} hari</strong>
        <div className="result-breakdown">
          <span>Total hak tersedia <b>{values.total} hari</b></span>
          <span>Setelah rencana cuti <b>{values.afterPlanned} hari</b></span>
        </div>
        <p>Gunakan angka dari HR/peraturan perusahaan jika hak cutimu berbeda.</p>
        <ResultActions text={text} />
      </div>
    </div>
  );
}

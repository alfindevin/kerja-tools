'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

function dateLabel(value: string, fallback: string) {
  if (!value) return fallback;
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

export default function LeaveEmailGenerator() {
  const [name, setName] = useState('');
  const [manager, setManager] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [handover, setHandover] = useState('');

  const content = useMemo(() => {
    const sender = name.trim() || '[Nama]';
    const recipient = manager.trim() || 'Bapak/Ibu';
    const start = dateLabel(startDate, '[tanggal mulai]');
    const end = dateLabel(endDate, '[tanggal selesai]');
    const reasonLine = reason.trim()
      ? `Saya mengajukan cuti untuk keperluan ${reason.trim()}.`
      : 'Saya ingin mengajukan cuti untuk keperluan pribadi.';
    const handoverLine = handover.trim()
      ? `Untuk memastikan pekerjaan tetap berjalan, ${handover.trim()}.`
      : 'Saya akan memastikan pekerjaan prioritas dan proses serah terima disiapkan sebelum cuti.';

    return {
      subject: `Pengajuan Cuti ${start}–${end}`,
      body: `Yth. ${recipient},

Saya ingin mengajukan cuti mulai ${start} sampai ${end}. ${reasonLine}

${handoverLine}

Mohon konfirmasi apabila ada informasi atau penyesuaian yang perlu saya lengkapi. Terima kasih atas perhatian dan persetujuannya.

Salam,
${sender}`
    };
  }, [name, manager, startDate, endDate, reason, handover]);

  const copyText = `Subjek: ${content.subject}\n\n${content.body}`;

  return (
    <div className="generator-grid">
      <div className="panel">
        <div className="form-row">
          <label>Nama kamu</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Contoh: Budi" />
        </div>
        <div className="form-row">
          <label>Nama atasan / HR</label>
          <input value={manager} onChange={(e) => setManager(e.target.value)} placeholder="Contoh: Ibu Sari" />
        </div>
        <div className="form-row">
          <label>Tanggal mulai cuti</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Tanggal selesai cuti</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Keperluan (opsional)</label>
          <input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Contoh: acara keluarga" />
        </div>
        <div className="form-row">
          <label>Rencana handover (opsional)</label>
          <textarea value={handover} onChange={(e) => setHandover(e.target.value)} placeholder="Contoh: laporan mingguan akan saya serahkan ke Andi sebelum Jumat" rows={4} />
        </div>
        <div className="info">Tidak perlu menuliskan alasan yang terlalu pribadi. Cukup berikan informasi yang dibutuhkan untuk proses persetujuan dan handover.</div>
      </div>

      <div className="letter-card">
        <div className="letter-card-head">
          <span className="mini-label">Preview email</span>
          <ResultActions text={copyText} />
        </div>
        <div className="email-preview-subject"><strong>Subjek:</strong> {content.subject}</div>
        <pre className="letter-preview email-preview">{content.body}</pre>
      </div>
    </div>
  );
}

'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

function formatDate(value: string) {
  if (!value) return '[tanggal terakhir bekerja]';
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

export default function ResignGenerator() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [reason, setReason] = useState('');

  const letter = useMemo(() => {
    const person = name.trim() || '[Nama Lengkap]';
    const role = position.trim() || '[Jabatan]';
    const employer = company.trim() || '[Nama Perusahaan]';
    const finalDate = formatDate(lastDate);
    const reasonLine = reason.trim()
      ? `Keputusan ini saya ambil dengan pertimbangan ${reason.trim()}.`
      : 'Keputusan ini saya ambil setelah mempertimbangkan rencana dan langkah saya ke depan.';

    return `Yth. Pimpinan / HR ${employer}

Dengan hormat,

Saya, ${person}, yang saat ini menjabat sebagai ${role}, dengan ini menyampaikan pengunduran diri dari ${employer}. Saya mengajukan agar hari terakhir saya bekerja adalah pada ${finalDate}.

${reasonLine}

Saya mengucapkan terima kasih atas kesempatan, pengalaman, dan kerja sama yang telah saya peroleh selama bekerja di ${employer}. Saya akan berupaya membantu proses serah terima pekerjaan dengan baik selama masa transisi.

Demikian surat pengunduran diri ini saya sampaikan. Atas perhatian dan pengertiannya, saya ucapkan terima kasih.

Hormat saya,

${person}`;
  }, [name, position, company, lastDate, reason]);

  return (
    <div className="generator-grid">
      <div className="panel">
        <div className="form-row">
          <label>Nama lengkap</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Contoh: Budi Santoso" />
        </div>
        <div className="form-row">
          <label>Jabatan</label>
          <input value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Contoh: Marketing Executive" />
        </div>
        <div className="form-row">
          <label>Nama perusahaan</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Contoh: PT Contoh Indonesia" />
        </div>
        <div className="form-row">
          <label>Hari terakhir bekerja</label>
          <input type="date" value={lastDate} onChange={(e) => setLastDate(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Alasan singkat (opsional)</label>
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Contoh: rencana pengembangan karier dan pendidikan" rows={4} />
        </div>
        <div className="info">Semua input diproses langsung di browser. Form ini tidak memerlukan login atau pengiriman data ke server.</div>
      </div>

      <div className="letter-card">
        <div className="letter-card-head">
          <span className="mini-label">Preview surat</span>
          <ResultActions text={letter} />
        </div>
        <pre className="letter-preview">{letter}</pre>
      </div>
    </div>
  );
}

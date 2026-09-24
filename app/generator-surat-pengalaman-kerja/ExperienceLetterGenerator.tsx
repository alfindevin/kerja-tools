'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

function dateLabel(value: string, fallback: string) {
  if (!value) return fallback;
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

export default function ExperienceLetterGenerator() {
  const [employee, setEmployee] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [duties, setDuties] = useState('');

  const letter = useMemo(() => {
    const person = employee.trim() || '[Nama Karyawan]';
    const job = role.trim() || '[Jabatan]';
    const employer = company.trim() || '[Nama Perusahaan]';
    const responsibility = duties.trim() || 'menjalankan tugas dan tanggung jawab sesuai jabatan dengan baik';

    return `SURAT KETERANGAN PENGALAMAN KERJA

Yang bertanda tangan di bawah ini menerangkan bahwa:

Nama: ${person}
Jabatan: ${job}
Perusahaan: ${employer}

Yang bersangkutan telah bekerja di ${employer} sejak ${dateLabel(start, '[tanggal mulai]')} sampai dengan ${dateLabel(end, '[tanggal selesai]')} sebagai ${job}.

Selama masa kerja tersebut, yang bersangkutan bertanggung jawab untuk ${responsibility}.

Surat keterangan ini dibuat untuk dapat dipergunakan sebagaimana mestinya.

Hormat kami,

${employer}
[Nama & Jabatan Penandatangan]`;
  }, [employee, role, company, start, end, duties]);

  return (
    <div className="generator-grid">
      <div className="panel">
        <div className="form-row"><label>Nama karyawan</label><input value={employee} onChange={(e) => setEmployee(e.target.value)} placeholder="Nama lengkap" /></div>
        <div className="form-row"><label>Jabatan</label><input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Contoh: Account Executive" /></div>
        <div className="form-row"><label>Perusahaan</label><input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Nama perusahaan" /></div>
        <div className="form-row"><label>Tanggal mulai</label><input type="date" value={start} onChange={(e) => setStart(e.target.value)} /></div>
        <div className="form-row"><label>Tanggal selesai</label><input type="date" value={end} onChange={(e) => setEnd(e.target.value)} /></div>
        <div className="form-row"><label>Tanggung jawab utama</label><textarea rows={4} value={duties} onChange={(e) => setDuties(e.target.value)} placeholder="Contoh: mengelola kampanye digital, laporan performa, dan koordinasi vendor" /></div>
        <div className="info">Template ini paling cocok sebagai draft awal. Surat resmi tetap perlu diterbitkan atau disetujui perusahaan dan ditandatangani pihak berwenang.</div>
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

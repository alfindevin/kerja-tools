'use client';

import { useMemo, useState } from 'react';
import ResultActions from '@/components/ResultActions';

const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
});

export default function SalaryNegotiationGenerator() {
  const [name, setName] = useState('');
  const [recipient, setRecipient] = useState('');
  const [role, setRole] = useState('');
  const [currentSalary, setCurrentSalary] = useState(6000000);
  const [targetSalary, setTargetSalary] = useState(7000000);
  const [achievement, setAchievement] = useState('');

  const content = useMemo(() => {
    const sender = name.trim() || '[Nama]';
    const to = recipient.trim() || 'Bapak/Ibu';
    const job = role.trim() || '[Jabatan]';
    const proof = achievement.trim()
      ? `Selama menjalankan peran ini, saya telah berkontribusi melalui ${achievement.trim()}.`
      : 'Selama menjalankan peran ini, saya terus berupaya memberikan kontribusi yang konsisten terhadap target dan kebutuhan tim.';

    return {
      subject: `Diskusi Penyesuaian Kompensasi — ${job}`,
      body: `Yth. ${to},

Saya ingin mengajukan waktu untuk mendiskusikan kompensasi saya pada posisi ${job}.

${proof}

Dengan mempertimbangkan tanggung jawab, kontribusi, serta perkembangan peran saya, saya ingin mendiskusikan kemungkinan penyesuaian dari ${rupiah.format(currentSalary)} menjadi sekitar ${rupiah.format(targetSalary)}.

Saya terbuka untuk mendengar pertimbangan perusahaan dan mendiskusikan bentuk penyesuaian yang realistis. Terima kasih atas waktu dan kesempatannya.

Salam,
${sender}`
    };
  }, [name, recipient, role, currentSalary, targetSalary, achievement]);

  return (
    <div className="generator-grid">
      <div className="panel">
        <div className="form-row"><label>Nama</label><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama kamu" /></div>
        <div className="form-row"><label>Atasan / HR</label><input value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="Contoh: Ibu Sari" /></div>
        <div className="form-row"><label>Jabatan</label><input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Contoh: Digital Marketing Specialist" /></div>
        <div className="form-row"><label>Gaji saat ini</label><input type="number" min="0" value={currentSalary} onChange={(e) => setCurrentSalary(Number(e.target.value))} /></div>
        <div className="form-row"><label>Target gaji</label><input type="number" min="0" value={targetSalary} onChange={(e) => setTargetSalary(Number(e.target.value))} /></div>
        <div className="form-row"><label>Pencapaian utama</label><textarea rows={4} value={achievement} onChange={(e) => setAchievement(e.target.value)} placeholder="Contoh: meningkatkan leads organik 40% dan menurunkan CPL..." /></div>
        <div className="info">Gunakan pencapaian yang terukur bila memungkinkan. Generator hanya membantu struktur pesan; keputusan kompensasi tetap bergantung pada konteks perusahaan.</div>
      </div>

      <div className="letter-card">
        <div className="letter-card-head">
          <span className="mini-label">Preview email</span>
          <ResultActions text={`Subjek: ${content.subject}\n\n${content.body}`} />
        </div>
        <div className="email-preview-subject"><strong>Subjek:</strong> {content.subject}</div>
        <pre className="letter-preview email-preview">{content.body}</pre>
      </div>
    </div>
  );
}

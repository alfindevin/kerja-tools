export type ToolItem = {
  href: string;
  icon: string;
  title: string;
  desc: string;
  keywords: string[];
  category: 'Gaji' | 'THR' | 'Waktu Kerja' | 'PHK' | 'Karier';
};

export const tools: ToolItem[] = [
  {
    href: '/kalkulator-thr',
    icon: '🎁',
    title: 'Kalkulator THR',
    desc: 'Estimasi THR berdasarkan masa kerja dan upah bulanan.',
    keywords: ['thr', 'hari raya', 'masa kerja', 'bonus'],
    category: 'THR'
  },
  {
    href: '/kalkulator-kenaikan-gaji',
    icon: '📈',
    title: 'Kalkulator Kenaikan Gaji',
    desc: 'Hitung nominal kenaikan, persentase, dan gaji baru.',
    keywords: ['kenaikan gaji', 'persentase', 'salary raise'],
    category: 'Gaji'
  },
  {
    href: '/kalkulator-gaji-bersih',
    icon: '💸',
    title: 'Kalkulator Gaji Bersih',
    desc: 'Estimasi take-home pay dari gaji, tunjangan, dan potongan.',
    keywords: ['gaji bersih', 'take home pay', 'thp', 'potongan'],
    category: 'Gaji'
  },
  {
    href: '/kalkulator-lembur',
    icon: '⏱️',
    title: 'Kalkulator Lembur',
    desc: 'Estimasi upah lembur hari kerja atau hari libur.',
    keywords: ['lembur', 'overtime', 'upah lembur', '173'],
    category: 'Waktu Kerja'
  },
  {
    href: '/kalkulator-prorata-gaji',
    icon: '🧮',
    title: 'Kalkulator Prorata Gaji',
    desc: 'Estimasi gaji proporsional berdasarkan hari kerja.',
    keywords: ['prorata', 'gaji prorata', 'hari kerja', 'join tengah bulan'],
    category: 'Gaji'
  },
  {
    href: '/kalkulator-pesangon',
    icon: '🧾',
    title: 'Kalkulator Pesangon',
    desc: 'Estimasi komponen pesangon dan UPMK berdasarkan masa kerja.',
    keywords: ['pesangon', 'phk', 'upmk', 'masa kerja', 'severance'],
    category: 'PHK'
  },
  {
    href: '/kalkulator-gaji-harian-jam',
    icon: '🕒',
    title: 'Gaji per Hari & Jam',
    desc: 'Konversi upah bulanan ke harian, per jam paruh waktu, dan dasar lembur.',
    keywords: ['gaji harian', 'gaji per jam', 'upah harian', '126', '173'],
    category: 'Gaji'
  },
  {
    href: '/generator-surat-resign',
    icon: '✉️',
    title: 'Generator Surat Resign',
    desc: 'Buat draft surat pengunduran diri profesional secara instan.',
    keywords: ['resign', 'pengunduran diri', 'surat resign', 'career'],
    category: 'Karier'
  }
];

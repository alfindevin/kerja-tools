export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ThrGuide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: GuideSection[];
};

export const thrGuides: ThrGuide[] = [
  {
    slug: 'cara-menghitung-thr',
    title: 'Cara Menghitung THR Karyawan dengan Mudah',
    metaTitle: 'Cara Menghitung THR Karyawan 2026 + Contoh',
    description: 'Pelajari rumus THR untuk masa kerja 12 bulan atau lebih dan masa kerja kurang dari setahun, lengkap dengan contoh sederhana.',
    eyebrow: 'Panduan THR',
    intro: 'Rumus THR sebenarnya cukup sederhana. Yang paling penting adalah mengetahui masa kerja dan dasar upah satu bulan yang digunakan.',
    sections: [
      {
        heading: 'Rumus THR berdasarkan masa kerja',
        bullets: [
          'Masa kerja 12 bulan atau lebih: THR sebesar 1 bulan upah.',
          'Masa kerja minimal 1 bulan tetapi kurang dari 12 bulan: masa kerja ÷ 12 × 1 bulan upah.'
        ]
      },
      {
        heading: 'Contoh perhitungan',
        paragraphs: [
          'Jika upah satu bulan Rp6.000.000 dan masa kerja sudah 12 bulan, estimasi THR adalah Rp6.000.000.',
          'Jika upah satu bulan Rp6.000.000 dan masa kerja baru 6 bulan, perhitungannya 6 ÷ 12 × Rp6.000.000 = Rp3.000.000.'
        ]
      },
      {
        heading: 'Lebih cepat dengan kalkulator',
        paragraphs: [
          'Daripada menghitung manual setiap kali, masukkan upah dan masa kerja ke Kalkulator THR KerjaTools. Hasil akan berubah otomatis sesuai input.'
        ]
      }
    ]
  },
  {
    slug: 'thr-karyawan-belum-setahun',
    title: 'THR Karyawan Belum Setahun: Bagaimana Menghitungnya?',
    metaTitle: 'THR Karyawan Belum Setahun: Rumus & Contoh 2026',
    description: 'Cara menghitung THR karyawan dengan masa kerja kurang dari 12 bulan menggunakan rumus proporsional.',
    eyebrow: 'Panduan THR',
    intro: 'Masa kerja belum satu tahun bukan berarti otomatis tidak mendapat THR. Untuk masa kerja minimal satu bulan, perhitungannya dapat dilakukan secara proporsional.',
    sections: [
      {
        heading: 'Rumus THR proporsional',
        paragraphs: ['Gunakan rumus: masa kerja dalam bulan ÷ 12 × 1 bulan upah.']
      },
      {
        heading: 'Contoh masa kerja 3, 6, dan 9 bulan',
        bullets: [
          '3 bulan dengan upah Rp6.000.000 → estimasi Rp1.500.000.',
          '6 bulan dengan upah Rp6.000.000 → estimasi Rp3.000.000.',
          '9 bulan dengan upah Rp6.000.000 → estimasi Rp4.500.000.'
        ]
      },
      {
        heading: 'Periksa komponen upah',
        paragraphs: [
          'Nilai akhir tetap bergantung pada komponen upah yang menjadi dasar perhitungan dan ketentuan yang berlaku di perusahaan. Gunakan kalkulator sebagai estimasi awal.'
        ]
      }
    ]
  },
  {
    slug: 'thr-karyawan-kontrak',
    title: 'THR Karyawan Kontrak: Siapa yang Berhak dan Cara Menghitungnya',
    metaTitle: 'THR Karyawan Kontrak 2026: Hak & Cara Hitung',
    description: 'Panduan ringkas THR untuk pekerja dengan perjanjian kerja waktu tertentu (PKWT), termasuk syarat masa kerja dan rumus dasar.',
    eyebrow: 'Panduan THR',
    intro: 'Status karyawan kontrak atau PKWT tidak dengan sendirinya menghapus hak THR. Permenaker No. 6 Tahun 2016 mencakup pekerja dengan PKWT maupun PKWTT sesuai syarat masa kerja.',
    sections: [
      {
        heading: 'Syarat masa kerja',
        paragraphs: [
          'Ketentuan dasar THR mencakup pekerja yang memiliki masa kerja satu bulan secara terus-menerus atau lebih.'
        ]
      },
      {
        heading: 'Cara menghitung',
        bullets: [
          'Jika masa kerja sudah 12 bulan atau lebih: 1 bulan upah.',
          'Jika masa kerja 1 sampai kurang dari 12 bulan: dihitung secara proporsional.'
        ]
      },
      {
        heading: 'Kenapa tanggal kontrak penting?',
        paragraphs: [
          'Tanggal mulai bekerja menentukan masa kerja yang dipakai dalam estimasi. Pastikan masa kerja yang dimasukkan ke kalkulator sesuai kondisi kerja sebenarnya.'
        ]
      }
    ]
  },
  {
    slug: 'thr-karyawan-harian-lepas',
    title: 'Cara Menghitung THR Karyawan Harian Lepas',
    metaTitle: 'THR Karyawan Harian Lepas 2026: Cara Menghitung',
    description: 'Pelajari dasar upah dan cara menghitung THR pekerja harian lepas berdasarkan ketentuan ketenagakerjaan.',
    eyebrow: 'Panduan THR',
    intro: 'Untuk pekerja harian lepas, menentukan nilai satu bulan upah memerlukan pendekatan rata-rata upah yang berbeda dari pekerja dengan gaji bulanan tetap.',
    sections: [
      {
        heading: 'Dasar upah untuk pekerja harian',
        paragraphs: [
          'Untuk pekerja harian lepas dengan masa kerja 12 bulan atau lebih, dasar upah satu bulan menggunakan rata-rata upah yang diterima dalam 12 bulan terakhir sebelum hari raya keagamaan.',
          'Jika masa kerja kurang dari 12 bulan, dasar upah satu bulan menggunakan rata-rata upah yang diterima setiap bulan selama masa kerja.'
        ]
      },
      {
        heading: 'Setelah mendapatkan rata-rata upah',
        paragraphs: [
          'Gunakan rata-rata tersebut sebagai nilai upah satu bulan. Selanjutnya terapkan rumus THR berdasarkan masa kerja.'
        ]
      },
      {
        heading: 'Catat penghasilan bulanan',
        paragraphs: [
          'Agar estimasi lebih akurat, siapkan catatan pembayaran atau slip upah dari periode yang relevan sebelum menghitung.'
        ]
      }
    ]
  },
  {
    slug: 'thr-2026',
    title: 'THR 2026 untuk Pekerja: Aturan dan Cara Cek Estimasi',
    metaTitle: 'THR 2026: Aturan, Rumus & Kalkulator THR',
    description: 'Ringkasan THR 2026 untuk pekerja Indonesia, sumber resmi Kemnaker, rumus dasar, dan kalkulator estimasi.',
    eyebrow: 'Update THR 2026',
    intro: 'Kementerian Ketenagakerjaan menerbitkan Surat Edaran Menteri Ketenagakerjaan No. M/3/HK.04.00/III/2026 tentang pelaksanaan pemberian THR keagamaan tahun 2026 bagi pekerja/buruh di perusahaan.',
    sections: [
      {
        heading: 'Dasar perhitungan tetap perlu dicek',
        paragraphs: [
          'Untuk menghitung estimasi, KerjaTools menggunakan rumus dasar pada Permenaker No. 6 Tahun 2016. Sementara itu, pelaksanaan THR tahun 2026 memiliki surat edaran khusus dari Kemnaker.'
        ]
      },
      {
        heading: 'Data yang perlu kamu siapkan',
        bullets: [
          'Upah satu bulan yang menjadi dasar perhitungan.',
          'Masa kerja dalam bulan.',
          'Ketentuan perusahaan apabila memberikan THR lebih besar dari ketentuan minimum.'
        ]
      },
      {
        heading: 'Gunakan sumber resmi',
        paragraphs: [
          'Untuk keputusan terkait hak ketenagakerjaan, selalu cocokkan hasil kalkulator dengan dokumen perusahaan dan ketentuan terbaru dari Kemnaker.'
        ]
      }
    ]
  }
];

export const getThrGuide = (slug: string) => thrGuides.find((guide) => guide.slug === slug);

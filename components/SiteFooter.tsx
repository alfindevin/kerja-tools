import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>KerjaTools</strong>
          <span>© 2026 — alat bantu kerja gratis untuk Indonesia.</span>
        </div>
        <div className="footer-links">
          <Link href="/tentang">Tentang</Link>
          <Link href="/metodologi">Metodologi</Link>
          <Link href="/panduan">Panduan</Link>
        </div>
      </div>
    </footer>
  );
}

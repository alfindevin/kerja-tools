import Link from 'next/link';

export default function SiteNav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/">Kerja<span>Tools</span></Link>
        <div className="nav-links">
          <Link href="/#tools">Kalkulator</Link>
          <Link href="/panduan">Panduan</Link>
          <Link href="/tentang">Tentang</Link>
          <Link href="/metodologi">Metodologi</Link>
        </div>
      </div>
    </nav>
  );
}

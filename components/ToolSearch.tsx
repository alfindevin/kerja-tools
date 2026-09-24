'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { tools } from '@/lib/tools';

export default function ToolSearch() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return tools.filter((tool) =>
      [tool.title, tool.desc, tool.category, ...tool.keywords]
        .join(' ')
        .toLowerCase()
        .includes(q)
    ).slice(0, 5);
  }, [query]);

  return (
    <div className="tool-search-wrap">
      <div className="searchbox">
        <span aria-hidden="true">⌕</span>
        <input
          aria-label="Cari tool"
          placeholder="Cari: THR, lembur, prorata, gaji..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {query && (
        <div className="search-results">
          {filtered.length > 0 ? filtered.map((tool) => (
            <Link href={tool.href} key={tool.href} className="search-result-item">
              <span className="search-result-icon">{tool.icon}</span>
              <span>
                <strong>{tool.title}</strong>
                <small>{tool.desc}</small>
              </span>
            </Link>
          )) : (
            <div className="search-empty">Belum ada tool yang cocok. Coba kata lain.</div>
          )}
        </div>
      )}
    </div>
  );
}

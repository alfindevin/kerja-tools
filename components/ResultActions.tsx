'use client';

import { useState } from 'react';

export default function ResultActions({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function share() {
    if (navigator.share) {
      await navigator.share({ title: 'Hasil KerjaTools', text });
      return;
    }
    await copy();
  }

  return (
    <div className="result-actions">
      <button type="button" onClick={copy}>{copied ? 'Tersalin ✓' : 'Salin hasil'}</button>
      <button type="button" onClick={share}>Bagikan</button>
    </div>
  );
}

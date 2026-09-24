import Link from 'next/link';
import JsonLd from './JsonLd';
import { siteUrl } from '@/lib/site';

type Item = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Item[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: siteUrl(item.href) } : {})
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={`${item.name}-${index}`}>
            {index > 0 && <span className="crumb-separator">/</span>}
            {item.href ? <Link href={item.href}>{item.name}</Link> : <span>{item.name}</span>}
          </span>
        ))}
      </nav>
    </>
  );
}

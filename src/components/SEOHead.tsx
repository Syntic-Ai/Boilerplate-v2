import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export function SEOHead({
  title = 'My App',
  description = 'Built with Syntic AI',
  ogImage,
  ogType = 'website',
  canonicalUrl,
}: SEOHeadProps) {
  const fullTitle = title.includes('|') ? title : `${title} | My App`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}

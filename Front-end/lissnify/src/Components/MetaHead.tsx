import Head from "next/head";
import { MetaData } from "@/utils/meta";

interface MetaHeadProps {
  meta: MetaData;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

export default function MetaHead({
  meta,
  canonicalUrl,
  ogImage = "/logo.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false
}: MetaHeadProps) {
  const fullTitle = meta.title;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#FF5722" />
      <meta name="author" content="Lissnify" />
      
      {/* Structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": fullTitle,
            "description": meta.description,
            "url": canonicalUrl,
            "publisher": {
              "@type": "Organization",
              "name": "Lissnify",
              "url": "https://lissnify.com"
            }
          })
        }}
      />
    </Head>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { defaultMetadata, organizationSchema, courseSchema, websiteSchema } from '@/lib/metadata';
import FloatingChat from '@/components/ui/FloatingChat';
import SmoothScroll from '@/components/ui/SmoothScroll';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/codebotix_logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
          <FloatingChat />
        </SmoothScroll>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}

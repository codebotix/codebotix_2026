// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { defaultMetadata, organizationSchema, courseSchema } from '@/lib/metadata';
import FloatingChat from '@/components/ui/FloatingChat';
import SmoothScroll from '@/components/ui/SmoothScroll';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {/* JSON-LD Structured Dathi */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
          <FloatingChat />
        </SmoothScroll>
      </body>
    </html>
  );
}

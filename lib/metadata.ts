// lib/metadata.ts
import type { Metadata } from 'next';

const siteConfig = {
  name: 'CodeBotix',
  tagline: 'Online AI and Robotics Classes for Kids',
  description:
    'Enroll in live 1:1 online AI and robotics classes for kids at CodeBotix. Build real hardware robots at home with expert mentors. Book your free trial class today!',
  url: 'https://www.codebotix.in',
  ogImage: '/online-ai-and-robotics-classes-for-kids-with-codebotix.png',
  twitterHandle: '@codebotix',
  keywords: [
    'online ai and robotics classes for kids',
    'certified ai classes for kids',
    'personalized robotics classes for kids',
    'robotics classes for kids with kit included',
    'best robotics course for kids',
    'online robotics classes for kids',
    'best robotics classes for kids in chennai',
    'best ai class for children',
    'ai classes for kids with real projects',
    'CodeBotix online courses',
    'CodeBotix AI and robotics academy',
    'STEM education online for kids',
    'AI courses for children',
    'STEM education online',
    'robotics classes for kids aged 10-17',
    'coding classes for kids',
    'ISRO recognised robotics certificate',
    'hands-on tech learning',
    'build robots at home',
    'kids AI programming',
    'Arduino robotics for kids',
    
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Online AI and Robotics Classes for Kids | CodeBotix',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: '/codebotix_logo.png',
    shortcut: '/codebotix_logo.png',
    apple: '/codebotix_logo.png',
  },
  authors: [{ name: 'CodeBotix Team', url: siteConfig.url }],
  creator: 'CodeBotix',
  publisher: 'CodeBotix',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googlebecc4544b2b99fab',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Online AI and Robotics Classes for Kids | CodeBotix',
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/online-ai-and-robotics-classes-for-kids-with-codebotix.png`,
        width: 1200,
        height: 630,
        alt: 'CodeBotix: Online AI and Robotics Classes for Kids',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online AI and Robotics Classes for Kids | CodeBotix',
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [`${siteConfig.url}/online-ai-and-robotics-classes-for-kids-with-codebotix.png`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CodeBotix',
  url: siteConfig.url,
  logo: `${siteConfig.url}/codebotix_logo.png`,
  description: siteConfig.description,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9150395889',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi', 'Tamil'],
  },
  sameAs: [
    'https://www.youtube.com/@codebotix',
    'https://www.instagram.com/codebotix',
    'https://www.facebook.com/codebotix',
  ],
  award: 'Mentored by ISRO Mentors & STEM Grant Recipients',
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${siteConfig.url}/#localbusiness`,
  name: 'CodeBotix',
  url: siteConfig.url,
  logo: `${siteConfig.url}/codebotix_logo.png`,
  image: `${siteConfig.url}/online-ai-and-robotics-classes-for-kids-with-codebotix.png`,
  description: siteConfig.description,
  telephone: '+91-9150395889',
  email: 'info@codebotix.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sapphire Square Apartments, Perambur Barracks Rd, Dhibighat, Choolai',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600007',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0878,
    longitude: 80.2644,
  },
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '66',
  },
  areaServed: ['Chennai', 'India', 'Worldwide'],
};

export const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Online AI and Robotics Classes for Kids (Ages 10-17)',
  description: siteConfig.description,
  provider: {
    '@type': 'Organization',
    name: 'CodeBotix',
    url: siteConfig.url,
  },
  educationalLevel: 'Beginner to Advanced',
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'Children aged 10-17',
  },
  teaches: [
    'Robotics & Electronics',
    'Arduino Hardware & Programming',
    'Artificial Intelligence & Ethics',
    'Prompt Engineering & AI Tools',
    '3D Printing & CAD Design',
    'App Development & Automation',
  ],
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: 'Live 1:1 online sessions with robotics kit included',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/#faq?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export { siteConfig };

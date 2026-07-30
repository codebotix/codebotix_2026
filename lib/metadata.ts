// lib/metadata.ts
import type { Metadata } from 'next';

const siteConfig = {
  name: 'CodeBotix',
  tagline: 'ISRO-Recognised Online Robotics & AI Classes for Kids Ages 10–17',
  description:
    'Premier live 1:1 online Robotics and AI courses for kids aged 10–17. Build real hardware robots, program Arduino, master Python & ChatGPT tools, and earn ISRO-recognised certificates with expert mentor guidance.',
  url: 'https://www.codebotix.com',
  ogImage: '/og-image.png',
  twitterHandle: '@codebotix',
  keywords: [
    'online robotics classes for kids',
    'AI courses for children',
    'STEM education online',
    'robotics classes for kids aged 10-17',
    'coding classes for kids',
    'ISRO recognised robotics certificate',
    'hands-on tech learning',
    'build robots at home',
    'kids AI programming',
    'Arduino robotics for kids',
    'CodeBotix online courses',
    'live 1:1 robotics mentorship',
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'CodeBotix: ISRO-Recognised Online Robotics & AI Classes for Kids',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
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

export const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Online Robotics & AI Classes for Kids (Ages 10-17)',
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
    courseWorkload: 'Live 1:1 online sessions with robotics kit',
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


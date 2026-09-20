import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import AboutImpact from '@/components/sections/AboutImpact';
import MeetFounder from '@/components/sections/MeetFounder';
import WhatMakesUsUnique from '@/components/sections/WhatMakesUsUnique';
import Achievements from '@/components/sections/Achievements';
import AboutFAQ from '@/components/sections/AboutFAQ';
import Enroll from '@/components/sections/Enroll';

export const metadata: Metadata = {
  title: 'About CodeBotix & Founder Shahbaz Ali Khan | Best AI and Robotics Classes for Kids',
  description:
    'Discover CodeBotix, the premier provider of the best online robotics classes for kids and best AI course for kids online (ages 8-17). Founded by Shahbaz Ali Khan, ISRO STEM partner mentor.',
  keywords: [
    'best ai and robotics classes for kids',
    'best online robotics classes for kids',
    'best ai course for kids online',
    'About CodeBotix',
    'Shahbaz Ali Khan CodeBotix',
    'ISRO mentored robotics academy',
    'Robotics classes for kids online',
    'STEM education India',
  ],
  alternates: {
    canonical: 'https://www.codebotix.in/about',
  },
  openGraph: {
    title: 'About CodeBotix & Founder Shahbaz Ali Khan | Best AI & Robotics Classes for Kids',
    description:
      'Learn how CodeBotix is empowering 6,000+ kids aged 8-17 through hands-on AI, robotics, and emerging technology education.',
    url: 'https://www.codebotix.in/about',
    type: 'website',
    images: [
      {
        url: 'https://www.codebotix.in/about-codebotix-best-robotics-and-ai-classes.png',
        width: 1200,
        height: 630,
        alt: 'About CodeBotix - Best AI and Robotics Classes for Kids',
      },
    ],
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://www.codebotix.in/about#webpage',
        url: 'https://www.codebotix.in/about',
        name: 'About CodeBotix | Best AI and Robotics Classes for Kids',
        description:
          'Learn about CodeBotix, India’s premier hands-on Robotics and AI learning platform for kids aged 8-17, founded by Shahbaz Ali Khan.',
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.codebotix.in/#organization',
        name: 'CodeBotix',
        url: 'https://www.codebotix.in',
        logo: 'https://www.codebotix.in/codebotix_logo.png',
        founder: {
          '@type': 'Person',
          name: 'Shahbaz Ali Khan',
          jobTitle: 'Founder & Lead Educator',
          image: 'https://www.codebotix.in/codebotix-founder-best-edtech-founder-in-chennai.jpeg',
          alumniOf: 'Kennedy-Lugar Youth Exchange and Study (YES) Program',
        },
        sameAs: ['https://calendly.com/info-codebotix/codebotix-demo-class'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What makes CodeBotix the best ai and robotics classes for kids?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CodeBotix is widely recognized for offering the best ai and robotics classes for kids because we prioritize hands-on, project-based 1:1 live learning over passive video tutorials. Every student receives a physical robotics kit delivered to their home and works directly with experienced mentors.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do your live 1:1 sessions deliver the best online robotics classes for kids?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our personalized 1:1 format provides the best online robotics classes for kids by giving each student dedicated, undivided attention from experienced trainers. Students work with real physical hardware kits at home, wiring breadboards, programming sensors, and debugging circuits in real time.',
            },
          },
          {
            '@type': 'Question',
            name: 'What will my child learn in the best ai course for kids online?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In the best ai course for kids online, students transition from being tech consumers to tech creators. They learn fundamental AI principles, prompt engineering, machine learning basics, computer vision, and build custom AI-powered applications, chatbots, and automation tools.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does my child need any prior coding or technical experience to start?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No prior coding, engineering, or technical background is needed! Our programs are structured for all skill levels—from absolute beginners to advanced tech enthusiasts aged 8 to 17.',
            },
          },
          {
            '@type': 'Question',
            name: 'What hardware or equipment is required for CodeBotix online classes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All your child needs is a computer or laptop with a stable internet connection and a webcam. For our robotics courses, we ship a complete, high-quality robotics kit containing microcontrollers, sensors, motors, breadboards, and electronic components directly to your doorstep.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" role="main">
        <AboutHero />
        <AboutImpact />
        <MeetFounder />
        <WhatMakesUsUnique />
        <Achievements />
        <AboutFAQ />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}

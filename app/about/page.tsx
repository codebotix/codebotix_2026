import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhyParentsTellUs from '@/components/sections/WhyParentsTellUs';
import WhatMakesUsUnique from '@/components/sections/WhatMakesUsUnique';
import Achievements from '@/components/sections/Achievements';
import HowWeMakeLearningFun from '@/components/sections/HowWeMakeLearningFun';
import Enroll from '@/components/sections/Enroll';

export const metadata: Metadata = {
  title: 'About Us | ISRO Mentored Robotics & AI Academy | CodeBotix',
  description:
    'Learn about CodeBotix, India’s premier hands-on Robotics and AI learning platform for kids aged 10-17. Built by ISRO mentors and STEM educators.',
  keywords: [
    'About CodeBotix',
    'Robotics academy for kids',
    'ISRO mentored STEM courses',
    'AI learning platform kids',
    'Hands-on robotics education',
  ],
  alternates: {
    canonical: 'https://www.codebotix.in/about',
  },
  openGraph: {
    title: 'About Us | ISRO Mentored Robotics & AI Academy | CodeBotix',
    description:
      'Learn about CodeBotix, India’s premier hands-on Robotics and AI learning platform for kids aged 10-17.',
    url: 'https://www.codebotix.in/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <WhyParentsTellUs />
        <WhatMakesUsUnique />
        <Achievements />
        <HowWeMakeLearningFun />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}

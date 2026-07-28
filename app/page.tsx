// app/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import WhyParentsTellUs from '@/components/sections/WhyParentsTellUs';
import HowWeMakeLearningFun from '@/components/sections/HowWeMakeLearningFun';
import WhatMakesUsUnique from '@/components/sections/WhatMakesUsUnique';
import YoutubeShowcase from '@/components/sections/YoutubeShowcase';
import CourseRoadmap from '@/components/sections/CourseRoadmap';
import Programs from '@/components/sections/Programs';
import CertificateShowcase from '@/components/sections/CertificateShowcase';
import Feedbacks from '@/components/sections/Feedbacks';
import Achievements from '@/components/sections/Achievements';
import FAQ from '@/components/sections/FAQ';
import ContactAndLocation from '@/components/sections/ContactAndLocation';
import Enroll from '@/components/sections/Enroll';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <ProblemStatement />
        <WhyParentsTellUs />
        <HowWeMakeLearningFun />
        <WhatMakesUsUnique />
        <YoutubeShowcase />
        <CourseRoadmap />
        <Programs />
        <CertificateShowcase />
        <Feedbacks />
        <Achievements />
        <FAQ />
        <ContactAndLocation />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}

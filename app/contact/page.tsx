import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactAndLocation from '@/components/sections/ContactAndLocation';
import FAQ from '@/components/sections/FAQ';
import Enroll from '@/components/sections/Enroll';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch | CodeBotix Robotics & AI Academy',
  description:
    'Have questions about our robotics or AI programs? Contact CodeBotix via email, phone, or visit our academy center in Chennai, Tamil Nadu.',
  keywords: [
    'Contact CodeBotix',
    'CodeBotix address Chennai',
    'Robotics course inquiry',
    'CodeBotix phone number',
    'CodeBotix email support',
  ],
  alternates: {
    canonical: 'https://www.codebotix.in/contact',
  },
  openGraph: {
    title: 'Contact Us | Get in Touch | CodeBotix',
    description:
      'Have questions about our robotics or AI programs? Reach out to CodeBotix today.',
    url: 'https://www.codebotix.in/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <ContactAndLocation />
        <FAQ />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}

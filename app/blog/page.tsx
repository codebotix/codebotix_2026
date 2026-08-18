import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Robotics & AI Blog | STEM Articles & Guides for Kids | CodeBotix',
  description:
    'Read hands-on guides, STEM learning tips, Python tutorials, and robotics project ideas for kids aged 10-17. Mentored by ISRO experts.',
  keywords: [
    'robotics blog for kids',
    'AI guides for school students',
    'STEM education articles',
    'learn python for kids',
    'arduino robotics tutorials',
    'ISRO recognised stem courses',
  ],
  alternates: {
    canonical: 'https://www.codebotix.in/blog',
  },
  openGraph: {
    title: 'Robotics & AI Blog | STEM Articles & Guides | CodeBotix',
    description:
      'Read hands-on guides, STEM learning tips, Python tutorials, and robotics project ideas for kids aged 10-17.',
    url: 'https://www.codebotix.in/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogClient />
      <Footer />
    </>
  );
}

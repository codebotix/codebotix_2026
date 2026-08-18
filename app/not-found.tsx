import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { Bot, Home, Compass } from 'lucide-react';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: '404 - Page Not Found | CodeBotix Robotics & AI Academy',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className={styles.container}>
        <div className={styles.content}>
          <div className={styles.robotBadge}>
            <Bot size={18} />
            <span>Navigation Lost in Space</span>
          </div>

          <h1 className={styles.errorCode}>404</h1>

          <h2 className={styles.title}>Page Not Found</h2>

          <p className={styles.description}>
            Oops! Looks like our robot explorer wandered into uncharted territory. 
            The page you are looking for might have been moved or doesn’t exist.
          </p>

          <div className={styles.actions}>
            <Button href="/" variant="primary" size="md" id="not-found-home-btn">
              <span className={styles.btnIcon}><Home size={18} /></span>
              Back to Home
            </Button>
            <Button href="/#roadmap" variant="outline" size="md" id="not-found-courses-btn">
              <span className={styles.btnIcon}><Compass size={18} /></span>
              Explore Courses
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

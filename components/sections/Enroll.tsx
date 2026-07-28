'use client';

import { Rocket, CheckCircle2 } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Button from '@/components/ui/Button';
import styles from './Enroll.module.css';

const benefits = [
  'Free 45-minute demo class',
  'ISRO-recognised curriculum',
  '1:1 personal instructor attention',
  'Real projects to take home',
  'Flexible scheduling',
  'Cancel anytime',
];

export default function Enroll() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      className={styles.section}
      id="enroll"
      aria-label="Enroll now section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background decorations */}
      <div className={styles.bgDeco1} aria-hidden="true" />
      <div className={styles.bgDeco2} aria-hidden="true" />

      <div className={styles.container}>
        <div className={[styles.inner, isVisible ? styles.visible : ''].join(' ')}>
          {/* Icon */}
          <div className={styles.rocketIcon} aria-hidden="true">
            <Rocket size={40} />
          </div>

          {/* Headline */}
          <h2 className={styles.heading}>
            Ready to Launch Your Child&apos;s
            <br />
            <span className={styles.accent}>Tech Career?</span>
          </h2>
          <p className={styles.subtext}>
            Join 6,000+ students worldwide. Start with a free class, no commitment needed.
          </p>

          {/* Benefits */}
          <div className={styles.benefitGrid} aria-label="Enrollment benefits">
            {benefits.map((b) => (
              <div key={b} className={styles.benefit}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={styles.ctas}>
            <Button
              href="https://calendly.com/info-codebotix/codebotix-demo-class"
              variant="primary"
              size="lg"
              id="enroll-free-demo-btn"
            >
              Book Free Demo Class
            </Button>
            <Button href="#programs" variant="secondary" size="lg" id="enroll-view-plans-btn">
              View All Plans
            </Button>
          </div>

           
        </div>
      </div>
    </section>
  );
}

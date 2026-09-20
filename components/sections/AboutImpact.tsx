'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './AboutImpact.module.css';

const impactStats = [
  {
    number: '6,000+',
    label: 'Students Taught',
    sublabel: 'Across India and international communities',
  },
  {
    number: 'ISRO',
    label: 'Recognized Partner',
    sublabel: 'Official STEM training partner for space & tech',
  },
  {
    number: '40 Districts',
    label: 'Tamil Nadu Model Schools',
    sublabel: 'Workshops conducted across all 40 districts',
  },
  {
    number: '1:1 Live',
    label: 'Personalized Mentorship',
    sublabel: 'Dedicated live online classes for ages 8 to 17',
  },
];

export default function AboutImpact() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {impactStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={[styles.card, isVisible ? styles.visible : ''].join(' ')}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
              <div className={styles.sublabel}>{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

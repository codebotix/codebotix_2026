'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './ProblemStatement.module.css';

const stats = [
  {
    value: '42.6%',
    label: 'Graduates Are Unemployable',
    desc: 'Due to lack of practical skills in today\'s tech-driven world',
    color: 'salmon',
  },
  {
    value: '80%',
    label: 'Not Ready for AI Jobs',
    desc: 'Of workforce lacks AI skills needed for future careers',
    color: 'gold',
  },
];

export default function ProblemStatement() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      className={styles.section}
      id="problem"
      aria-label="Problem statement section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title="The Problem with Traditional Learning"
            subtitle="While kids study theory in textbooks, they're missing out on the hands-on tech skills they need for tomorrow's jobs."
            theme="dark"
          />
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                styles.statCard,
                styles[stat.color],
                isVisible ? styles.visible : '',
              ].join(' ')}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <p className={styles.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

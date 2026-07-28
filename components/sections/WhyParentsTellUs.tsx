'use client';

import { TrendingDown, AlertCircle, Target, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './WhyParentsTellUs.module.css';

const problems = [
  {
    icon: <TrendingDown size={28} />,
    title: 'Only Theory, No Practice',
    desc: 'Kids study from books but never build anything real',
  },
  {
    icon: <AlertCircle size={28} />,
    title: 'Missing Future Skills',
    desc: 'No exposure to AI, robotics, or 3D printing in schools',
  },
  {
    icon: <Target size={28} />,
    title: 'Boring Learning',
    desc: 'Memorization instead of exciting hands-on projects',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Unprepared for Tomorrow',
    desc: 'Kids lack tech skills needed for future careers',
  },
];

export default function WhyParentsTellUs() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={styles.section}
      id="about"
      aria-label="What parents tell us section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        {/* Section Title */}
        <div className={[styles.titleWrap, isVisible ? styles.visible : ''].join(' ')}>
          <p className={styles.sectionLabel}>What Parents Tell Us:</p>
        </div>

        {/* Problem Cards */}
        <div className={styles.grid}>
          {problems.map((item, i) => (
            <div
              key={item.title}
              className={[styles.card, isVisible ? styles.visible : ''].join(' ')}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.iconBox}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Solution Banner */}
        <div className={[styles.solutionBanner, isVisible ? styles.visible : ''].join(' ')}>
          <h3 className={styles.bannerHeading}>
            That&apos;s Why We Created <span className={styles.accent}>CodeBotix</span>
          </h3>
          <p className={styles.bannerSubtitle}>
            Real projects. Real skills. Real preparation for the future.
          </p>
        </div>
      </div>
    </section>
  );
}

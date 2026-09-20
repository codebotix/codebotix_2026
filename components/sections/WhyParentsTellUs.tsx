'use client';

import { TrendingDown, AlertCircle, Target, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './WhyParentsTellUs.module.css';

const problems = [
  {
    num: '01',
    icon: <TrendingDown size={22} />,
    title: 'Only Theory, No Practice',
    desc: 'Kids study from textbooks but never build or test real working hardware or software.',
  },
  {
    num: '02',
    icon: <AlertCircle size={22} />,
    title: 'Missing Future Skills',
    desc: 'Traditional schools offer zero hands-on exposure to AI, robotics, microcontrollers, or 3D design.',
  },
  {
    num: '03',
    icon: <Target size={22} />,
    title: 'Boring Rote Learning',
    desc: 'Students are forced into passive memorization instead of creating exciting, personal projects.',
  },
  {
    num: '04',
    icon: <Lightbulb size={22} />,
    title: 'Unprepared for Tomorrow',
    desc: 'Children lack the technical confidence, problem-solving mindset, and digital literacy required for modern tech careers.',
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
          <h2 className={styles.sectionLabel}>What Parents Tell Us</h2>
          <p className={styles.subLabel}>The core gaps parents encounter in traditional schooling today</p>
        </div>

        {/* Problem Minimalist Flow Row */}
        <div className={styles.flowRow}>
          {problems.map((item, i) => (
            <div
              key={item.title}
              className={[styles.flowItem, isVisible ? styles.visible : ''].join(' ')}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.itemHeader}>
                <span className={styles.itemNumber}>{item.num}</span>
                <span className={styles.iconWrapper}>{item.icon}</span>
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Solution Callout Banner */}
        <div className={[styles.solutionBanner, isVisible ? styles.visible : ''].join(' ')}>
          <h3 className={styles.bannerHeading}>
            That&apos;s Why We Created <span className={styles.accent}>CodeBotix</span>
          </h3>
          <p className={styles.bannerSubtitle}>
            Offering the best robotics course for kids, online robotics classes for kids, and certified ai classes for kids with live 1:1 mentorship.
          </p>
        </div>
      </div>
    </section>
  );
}

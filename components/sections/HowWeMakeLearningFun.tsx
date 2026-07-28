'use client';

import { Wrench, Heart, Award, Target } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './HowWeMakeLearningFun.module.css';

const features = [
  {
    icon: <Wrench size={28} />,
    stat: '100%',
    statLabel: 'Hands-On Projects',
    title: 'Build Real Stuff',
    desc: 'No boring theory! Kids build working robots, smart apps, and cool 3D designs from day one.',
  },
  {
    icon: <Heart size={28} />,
    stat: '1:1',
    statLabel: 'Student-Teacher Ratio',
    title: '1:1 Personal Attention',
    desc: 'Every child gets dedicated one-on-one guidance from their instructor.',
  },
  {
    icon: <Award size={28} />,
    stat: 'ISRO',
    statLabel: 'Recognized Curriculum',
    title: 'Skills That Actually Matter',
    desc: 'Learn the same tools used by real engineers and developers in top tech companies.',
  },
  {
    icon: <Target size={28} />,
    stat: '15+',
    statLabel: 'Projects Per Level',
    title: 'Take Projects Home',
    desc: 'Every robot, app, and 3D print becomes part of your child\'s amazing tech portfolio.',
  },
];

export default function HowWeMakeLearningFun() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={styles.section}
      id="learning"
      aria-label="How we make learning fun section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                How We Make Learning{' '}
                <span className={styles.accent}>Actually Fun</span>
              </>
            }
            subtitle="Step-by-step projects that turn curious kids into confident creators"
            theme="light"
          />
        </div>

        <div className={styles.grid}>
          {features.map((item, i) => (
            <div
              key={item.title}
              className={[styles.card, isVisible ? styles.visible : ''].join(' ')}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.iconBox}>{item.icon}</div>
              <div className={styles.stat}>{item.stat}</div>
              <div className={styles.statLabel}>{item.statLabel}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

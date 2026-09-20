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
    title: 'Build Real Hardware',
    desc: 'With robotics classes for kids with kit included, students build real robots and smart apps from day one.',
  },
  {
    icon: <Heart size={28} />,
    stat: '1:1',
    statLabel: 'Student-Teacher Ratio',
    title: '1:1 Personalized Classes',
    desc: 'Every student receives dedicated one-on-one attention in personalized robotics classes for kids.',
  },
  {
    icon: <Award size={28} />,
    stat: 'ISRO',
    statLabel: 'Recognized Partner',
    title: 'Certified AI Classes',
    desc: 'CodeBotix provides certified ai classes for kids with curriculum designed alongside mentors.',
  },
  {
    icon: <Target size={28} />,
    stat: '15+',
    statLabel: 'Projects Per Level',
    title: 'AI Classes with Real Projects',
    desc: 'Experience AI classes for kids with real projects where every creation builds an impressive tech portfolio.',
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
                How CodeBotix Makes Learning{' '}
                <span className={styles.accent}>Actually Fun</span>
              </>
            }
            subtitle="Step-by-step online AI and robotics classes for kids that turn curious children into confident creators"
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

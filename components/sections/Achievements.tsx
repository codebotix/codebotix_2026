'use client';

import { Users, BookOpen, Award, Globe, Star, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Achievements.module.css';

const achievements = [
  { icon: <Users size={32} />, stat: '6,000+', label: 'Students Enrolled', color: 'blue' },
  { icon: <Globe size={32} />, stat: '8+', label: 'Countries Reached', color: 'green' },
  { icon: <Award size={32} />, stat: '5+', label: 'US Department of State Grants', color: 'gold' },
  { icon: <BookOpen size={32} />, stat: '15+', label: 'Projects Per Level', color: 'purple' },
  { icon: <Star size={32} />, stat: '4.9/5', label: 'Average Rating', color: 'orange' },
  { icon: <Rocket size={32} />, stat: '98%', label: 'Parent Satisfaction', color: 'pink' },
];

export default function Achievements() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={styles.section}
      id="achievements"
      aria-label="Achievements and stats section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                Our <span className={styles.accent}>Achievements</span>
              </>
            }
            subtitle="Numbers that reflect real impact — students, global reach, and US Department of State grants."
            theme="dark"
          />
        </div>

        <div className={styles.grid}>
          {achievements.map((item, i) => (
            <div
              key={item.label}
              className={[
                styles.card,
                styles[item.color],
                isVisible ? styles.visible : '',
              ].join(' ')}
              style={{ transitionDelay: `${i * 0.1}s` }}
              aria-label={`${item.stat} ${item.label}`}
            >
              <div className={styles.iconBox} aria-hidden="true">
                {item.icon}
              </div>
              <div className={styles.stat}>{item.stat}</div>
              <div className={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

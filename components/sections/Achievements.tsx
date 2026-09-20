'use client';

import { Users, BookOpen, Award, Globe, Star, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Achievements.module.css';

const achievements = [
  { icon: <Users size={28} />, stat: '6,000+', label: 'Students Enrolled', color: 'blue' },
  { icon: <Globe size={28} />, stat: '8+', label: 'Countries Reached', color: 'green' },
  { icon: <Award size={28} />, stat: '5+', label: 'US Department of State Grants', color: 'gold' },
  { icon: <BookOpen size={28} />, stat: '15+', label: 'Projects Per Level', color: 'purple' },
  { icon: <Star size={28} />, stat: '4.9/5', label: 'Average Rating', color: 'orange' },
  { icon: <Rocket size={28} />, stat: '98%', label: 'Parent Satisfaction', color: 'pink' },
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
            subtitle="Real impact across 6,000+ students, global reach in Chennai and worldwide, and US Department of State STEM grants."
            theme="light"
          />
        </div>

        {/* Minimalist Metric Strip */}
        <div className={styles.statStrip}>
          {achievements.map((item, i) => (
            <div
              key={item.label}
              className={[
                styles.statItem,
                styles[item.color],
                isVisible ? styles.visible : '',
              ].join(' ')}
              style={{ transitionDelay: `${i * 0.1}s` }}
              aria-label={`${item.stat} ${item.label}`}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                {item.icon}
              </div>
              <div className={styles.statNumber}>{item.stat}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

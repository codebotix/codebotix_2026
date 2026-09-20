'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './ProblemStatement.module.css';

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
        <div className={[styles.badgeWrap, isVisible ? styles.visible : ''].join(' ')}>
          <span className={styles.badge}>THE PROBLEM WITH TRADITIONAL LEARNING</span>
        </div>

        <div className={styles.textStack}>
          <h2
            className={[styles.largeStatement, isVisible ? styles.visible : ''].join(' ')}
            style={{ transitionDelay: '0.1s' }}
          >
            Today, <span className={styles.highlightRed}>42.6%</span> of graduates are unemployable.
          </h2>

          <h2
            className={[styles.largeStatement, isVisible ? styles.visible : ''].join(' ')}
            style={{ transitionDelay: '0.25s' }}
          >
            Meanwhile, <span className={styles.highlightYellow}>80%</span> of the workforce is unprepared for AI.
          </h2>

          <p
            className={[styles.largeStatement, styles.subStatement, isVisible ? styles.visible : ''].join(' ')}
            style={{ transitionDelay: '0.4s' }}
          >
            While children study theory in traditional classrooms, CodeBotix provides personalized robotics classes with kit included so students build real-world AI and technical confidence.
          </p>
        </div>
      </div>
    </section>
  );
}


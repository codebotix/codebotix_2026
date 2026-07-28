'use client';

import { Lightbulb, Trophy, Globe, Code } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './WhatMakesUsUnique.module.css';

const uniqueFeatures = [
  {
    icon: <Lightbulb size={26} />,
    title: 'Problem-Solving',
    desc: 'Think like an engineer and solve real-world challenges',
    tag: 'Design solutions for everyday problems',
  },
  {
    icon: <Trophy size={26} />,
    title: 'Competition Ready',
    desc: 'Win robotics competitions & tech showcases',
    tag: 'Access to national & international contests',
  },
  {
    icon: <Globe size={26} />,
    title: 'Global Standards',
    desc: 'ISRO-recognized curriculum used worldwide',
    tag: 'Same quality as top international programs',
  },
  {
    icon: <Code size={26} />,
    title: 'Master Tech',
    desc: 'Build real-world tech skills that employers love',
    tag: 'Industry-relevant tools and technologies',
  },
];

export default function WhatMakesUsUnique() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={styles.section}
      id="unique"
      aria-label="What makes us unique section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                What Makes Us <span className={styles.accent}>Unique?</span>
              </>
            }
            theme="dark"
          />
        </div>

        {/* Quote Card */}
        <div className={[styles.quoteCard, isVisible ? styles.visible : ''].join(' ')}>
          <p className={styles.quoteText}>
            &quot;Will my child just get another certificate?&quot;
          </p>
          <p className={styles.quoteAnswer}>
            No! They&apos;ll build an amazing portfolio of real projects that wow everyone.
          </p>
        </div>

        {/* Feature Cards */}
        <div className={styles.grid}>
          {uniqueFeatures.map((item, i) => (
            <div
              key={item.title}
              className={[styles.card, isVisible ? styles.visible : ''].join(' ')}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className={styles.iconBox}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <div className={styles.cardTag}>{item.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

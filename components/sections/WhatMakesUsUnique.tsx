'use client';

import { Lightbulb, Trophy, Globe, Code, HelpCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './WhatMakesUsUnique.module.css';

const uniqueFeatures = [
  {
    icon: <Lightbulb size={24} />,
    title: 'Problem-Solving Mindset',
    desc: 'Think like an engineer in personalized robotics classes for kids, designing practical solutions for real-world challenges.',
    tag: 'Hands-On Engineering',
  },
  {
    icon: <Trophy size={24} />,
    title: 'Competition & Showcase Ready',
    desc: 'Gain skills and confidence in the best robotics course for kids to enter national and international tech contests.',
    tag: 'Global Contests',
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Standards in Chennai & Worldwide',
    desc: 'CodeBotix delivers the best robotics classes for kids in chennai and online across the globe with ISRO-recognised curriculum.',
    tag: 'Worldwide mentorship',
  },
  {
    icon: <Code size={24} />,
    title: 'Master Emerging Technologies',
    desc: 'Experience the best ai class for children, building real-world proficiency in AI, Python, microcontrollers, IoT, and algorithms.',
    tag: 'Future-Ready Skills',
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
                What Makes CodeBotix <span className={styles.accent}>Unique?</span>
              </>
            }
            subtitle="The premier destination for certified ai classes for kids and personalized online robotics learning"
            theme="light"
          />
        </div>

        {/* Editorial Parent Question */}
        <div className={[styles.quoteWrap, isVisible ? styles.visible : ''].join(' ')}>
          <h3 className={styles.quoteQuestion}>
            <HelpCircle size={20} color="var(--purple-light)" />
            &quot;Will my child just get another paper certificate?&quot;
          </h3>
          <p className={styles.quoteAnswer}>
            No! At CodeBotix, students build an impressive portfolio of functional hardware projects, working AI apps, and custom creations that demonstrate true technical mastery.
          </p>
        </div>

        {/* Minimalist 2-Column Feature List */}
        <div className={styles.listGrid}>
          {uniqueFeatures.map((item, i) => (
            <div
              key={item.title}
              className={[styles.listItem, isVisible ? styles.visible : ''].join(' ')}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className={styles.iconBox}>{item.icon}</div>
              <div className={styles.contentBox}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
                <span className={styles.tagPill}>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

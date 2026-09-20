'use client';

import Image from 'next/image';
import { Quote, Award, CheckCircle2, Rocket, Heart } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './MeetFounder.module.css';

export default function MeetFounder() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      className={styles.section}
      id="founder-story"
      aria-label="Meet Founder Shahbaz Ali Khan"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <div className={styles.badge}>FOUNDER&apos;S STORY</div>
          <h2 className={styles.heading}>Meet Shahbaz Ali Khan</h2>
        </div>

        {/* Quote Callout */}
        <div className={[styles.quoteBox, isVisible ? styles.visible : ''].join(' ')}>
          <Quote className={styles.quoteIcon} size={32} />
          <p className={styles.quoteText}>
            &quot;I didn&apos;t start CodeBotix because I wanted to build an education company.
            I started it because of one classroom.&quot;
          </p>
        </div>

        {/* Grid Layout */}
        <div className={styles.grid}>
          {/* Left Column: Portrait Card */}
          <div className={[styles.imageCol, isVisible ? styles.visible : ''].join(' ')}>
            <div className={styles.portraitCard}>
              <Image
                src="/codebotix-founder-best-edtech-founder-in-chennai.jpeg"
                alt="Shahbaz Ali Khan - Founder of CodeBotix"
                width={480}
                height={560}
                priority
                className={styles.founderImage}
              />
              <div className={styles.founderMeta}>
                <h3 className={styles.founderName}>Shahbaz Ali Khan</h3>
                <p className={styles.founderTitle}>Founder &amp; Lead Educator, CodeBotix</p>
                <div className={styles.founderTags}>
                  <span className={styles.tagPill}>YES Alumnus</span>
                  <span className={styles.tagPill}>Ex-Software Engineer</span>
                  <span className={styles.tagPill}>ISRO STEM Mentor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Story Narrative from aboutshahbaz.md */}
          <div className={[styles.storyCol, isVisible ? styles.visible : ''].join(' ')}>
            <div className={styles.storyBlock}>
              <p className={styles.paragraph}>
                In 2017, as a high-school student from India, I was selected for the Kennedy-Lugar Youth Exchange
                and Study (YES) Program and spent an academic year in Louisiana, USA. That was where I discovered
                robotics—and, more importantly, a completely different way of learning.
              </p>

              <p className={styles.paragraph}>
                My robotics classroom had no textbooks or notebooks. Every student had their own box of electronic
                components, and we learned by building circuits, programming microcontrollers, testing sensors, breaking
                things, troubleshooting, and trying again. For the first time, I experienced education as something you
                <strong> do</strong>, not something you simply study.
              </p>

              <p className={styles.paragraph}>
                When I returned to India, I began participating in robotics competitions and science exhibitions. I noticed
                that many students could assemble impressive projects by following tutorials, but struggled to explain how
                their own creations actually worked. I realized that what was missing wasn&apos;t talent. It was the
                opportunity to learn through genuine experimentation.
              </p>

              <p className={styles.paragraph} style={{ fontWeight: 600, color: 'var(--primary)' }}>
                So I started teaching.
              </p>

              {/* Milestone Highlights Card */}
              <div className={styles.highlightCard}>
                <div className={styles.highlightTitle}>
                  <Award size={20} color="var(--purple-light)" />
                  From Workshops to National Impact
                </div>
                <ul className={styles.milestoneList}>
                  <li className={styles.milestoneItem}>
                    <CheckCircle2 size={18} className={styles.milestoneIcon} />
                    <span><strong>155 Girls in STEM:</strong> Introduced hands-on robotics through a U.S. Department of State YES Alumni Grant.</span>
                  </li>
                  <li className={styles.milestoneItem}>
                    <CheckCircle2 size={18} className={styles.milestoneIcon} />
                    <span><strong>1,000+ Students Reached:</strong> Collaborated with the U.S. Mission in India on key STEM initiatives.</span>
                  </li>
                  <li className={styles.milestoneItem}>
                    <CheckCircle2 size={18} className={styles.milestoneIcon} />
                    <span><strong>All 40 Districts:</strong> Invited by Tamil Nadu Model Schools Department to conduct statewide robotics workshops.</span>
                  </li>
                  <li className={styles.milestoneItem}>
                    <CheckCircle2 size={18} className={styles.milestoneIcon} />
                    <span><strong>ISRO Recognition:</strong> CodeBotix subsequently recognized as an official STEM training partner by ISRO.</span>
                  </li>
                </ul>
              </div>

              <p className={styles.paragraph}>
                In 2024, I left my career as a software engineer to build CodeBotix full-time. Since then, CodeBotix
                has grown into a vibrant learning community reaching approximately <strong>6,000 students</strong> across India and
                internationally, teaching AI, robotics, programming, electronics, IoT, space technology, 3D design, and other emerging technologies.
              </p>

              <p className={styles.paragraph}>
                But the mission has become bigger than robotics. As AI increasingly shapes the world around us, I believe
                children need more than the ability to use technology. They need the ability to understand it, question it,
                build with it, and use it responsibly.
              </p>

              {/* Final Mission Box */}
              <div className={styles.goalCard}>
                <div className={styles.goalLabel}>MY GOAL WITH CODEBOTIX</div>
                <div className={styles.goalStatement}>
                  &quot;To make the opportunity I received from one robotics classroom in Louisiana accessible to children everywhere.&quot;
                </div>
                <p className={styles.goalSubtext}>
                  I want the next generation to grow up not just as consumers of technology, but as the people capable of creating and shaping it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { Rocket, Trophy, Zap, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const highlights = [
  { icon: <Rocket size={22} />, label: 'Future Tech Skills' },
  { icon: <Trophy size={22} />, label: 'Real Projects' },
  { icon: <Zap size={22} />, label: 'Hands-On Learning' },
];

export default function Hero() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={styles.hero}
      id="hero"
      aria-label="Hero section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        {/* Left Content */}
        <div className={[styles.content, isVisible ? styles.visible : ''].join(' ')}>
          {/* Badge */}
          <div className={styles.badge} id="hero-badge">
            <Star size={14} fill="#f5a623" color="#f5a623" />
            <span>ISRO-Recognised Tutors • Worldwide Access</span>
          </div>

          {/* Heading */}
          <h1 className={styles.heading}>
            Online Robotics & AI
            <br />
            Classes for Kids{' '}
            <span className={styles.accentText}>(Ages 10–17)</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Join worldwide online robotics classes for kids! Step-by-step AI and
            robotics projects at home. Build real robots, create smart apps, and
            design cool gadgets with expert tutors.
          </p>

          {/* Highlights */}
          <div className={styles.highlights} aria-label="Key features">
            {highlights.map((item) => (
              <div key={item.label} className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{item.icon}</span>
                <span className={styles.highlightLabel}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={styles.ctas}>
            <Button href="#programs" variant="primary" size="lg" id="hero-explore-btn">
              Explore Courses
            </Button>
            <Button
              href="https://calendly.com/info-codebotix/codebotix-demo-class"
              variant="outline"
              size="lg"
              id="hero-book-btn"
            >
              Book Free Class
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className={[styles.imageWrapper, isVisible ? styles.visible : ''].join(' ')}>
          {/* Age Badge */}
          <div className={styles.ageBadge} aria-label="Ages 10 to 17">Ages 10-17</div>

          {/* Main Image */}
          <div className={styles.imageCard}>
            <Image
              src="/images/online-ai-and-robotics-classes-for-kids.jpg"
              alt="Online AI and robotics class for kids with CodeBotix"
              width={520}
              height={400}
              priority
              className={styles.heroImage}
            />

            {/* Floating Label: Build Real Robots */}
            <div className={styles.floatBadge1} aria-label="Build Real Robots">
              Build Real Robots!
            </div>

            {/* Floating Label: At-Home Learning */}
            <div className={styles.floatBadge2} aria-label="At-Home Learning">
              At-Home Learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

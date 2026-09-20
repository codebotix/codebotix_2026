'use client';

import Image from 'next/image';
import { Star, Lightbulb, Compass, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={styles.hero}
      id="about-hero"
      aria-label="About CodeBotix Overview"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        {/* Left Content */}
        <div className={[styles.content, isVisible ? styles.visible : ''].join(' ')}>
          {/* Badge */}
          <div className={styles.badge} id="about-hero-badge">
            <Star size={14} fill="#f5a623" color="#f5a623" />
            <span>Pioneering Hands-On Tech Education</span>
          </div>

          {/* Heading */}
          <h1 className={styles.heading}>
            Transforming How Kids Learn{' '}
            <span className={styles.accentText}>AI & Robotics</span> (Ages 8–17)
          </h1>

          {/* Main Content from aboutcodebotix.md */}
          <p className={styles.description}>
            CodeBotix is a technology education company helping children aged 8 to 17 learn AI,
            robotics, programming, and emerging technologies through hands-on, project-based learning.
          </p>

          <p className={styles.subDescription}>
            Our 1:1 live online classes give students the opportunity to experiment, build, solve problems,
            and learn directly with experienced trainers. Students progress through structured programs
            designed to turn complex concepts into practical, real-world understanding.
          </p>

          {/* Core Philosophy Box */}
          <div className={styles.philosophyBox}>
            <div className={styles.philosophyTitle}>
              <Lightbulb size={18} color="var(--purple-light)" />
              Our Core Philosophy
            </div>
            <p className={styles.philosophyText}>
              &quot;We believe children should not just learn about technology. They should understand how it works,
              experiment with it, build something real, and figure out what happens when it doesn&apos;t work.&quot;
            </p>
          </div>

          {/* CTAs */}
          <div className={styles.ctas}>
            <Button
              href="https://calendly.com/info-codebotix/codebotix-demo-class"
              variant="primary"
              size="lg"
              id="about-hero-demo-btn"
            >
              Book Free Demo Class
            </Button>
            <Button href="#founder-story" variant="outline" size="lg" id="about-hero-founder-btn">
              Read Our Founder&apos;s Story
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className={[styles.imageWrapper, isVisible ? styles.visible : ''].join(' ')}>
          {/* Floating Badges */}
          <div className={styles.floatBadge1} aria-label="1:1 Live Interactive">
            ✨ 1:1 Live Online Classes
          </div>

          <div className={styles.floatBadge2} aria-label="ISRO Recognized STEM Partner">
            🚀 ISRO-Recognized STEM Partner
          </div>

          {/* Main Image */}
          <div className={styles.imageCard}>
            <Image
              src="/about-codebotix-best-robotics-and-ai-classes.png"
              alt="About CodeBotix - Best online robotics and AI classes for kids"
              width={540}
              height={420}
              priority
              className={styles.aboutHeroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

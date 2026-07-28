'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Feedbacks.module.css';

const testimonials = [
  {
    id: 1,
    category: 'National-Level Outcome',
    text: 'Thanks to CodeBotix for helping my son. He was selected for a national-level Mechathlon competition.',
    name: 'Vasanthichampalal Suthar',
    role: 'Parent',
    rating: 5,
  },
  {
    id: 2,
    category: 'Transformation',
    text: 'My son started from zero and now confidently explores and practices coding on his own. The hands-on approach really works.',
    name: 'KamatchiRajan Jothi',
    role: 'Parent',
    rating: 5,
  },
  {
    id: 3,
    category: 'Hands-on Learning',
    text: 'The hands-on sessions helped me understand concepts in a practical and engaging way.',
    name: 'Keerthikaa',
    role: 'Student',
    rating: 5,
  },
  {
    id: 4,
    category: 'Quality Teaching',
    text: 'The sessions were interactive, engaging, and very useful. The blend of theory and hands-on learning made a big difference.',
    name: 'Amrutha S',
    role: 'Parent',
    rating: 5,
  },
  {
    id: 5,
    category: 'Skill Development',
    text: 'I learned many new things about AI and coding in these 15-day classes, including how to write prompts, use AI tools responsibly, write code, and run programs. I also learned the basics of AI ethics.',
    name: 'Ridan Hoda',
    role: 'Student',
    rating: 5,
  },
  {
    id: 6,
    category: 'Inspiration',
    text: "I used to not like Computer Science, but now because of CodeBotix workshops, I'm willing to take up Robotics.",
    name: 'Andrea Arun',
    role: "Student, St. Michael's Academy",
    rating: 5,
  },
  {
    id: 7,
    category: 'Deep Understanding',
    text: 'I now have a complete understanding of the basics of electronics, types of robots, programming, and how sensors work to now build a robot of my own.',
    name: 'Nethra Kothandam',
    role: 'Student, Bala Vidya Mandir',
    rating: 5,
  },
  {
    id: 8,
    category: 'Educator Endorsement',
    text: 'The quality of engagement in the 3-day workshop was so high that even during breaks, students were passionately discussing their projects. The clarity in what we were trying to give children really came through, and the final project day was a testament to that. CodeBotix brought in depth, structure, and excitement all at once.',
    name: 'Teacher at Adyar Theosophical Academy',
    role: 'Educator',
    rating: 5,
  },
];

export default function Feedbacks() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      className={styles.section}
      id="testimonials"
      aria-label="Parent and student feedback section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                Real Stories, <span className={styles.accent}>Real Impact</span>
              </>
            }
            subtitle="Read what parents, students, and educators say about their CodeBotix journey."
            theme="light"
          />
        </div>

        <div className={[styles.carouselWrap, isVisible ? styles.visible : ''].join(' ')}>
          <div className={styles.grid}>
            {visible.map((t, i) => (
              <article
                key={`${t.id}-${i}`}
                className={[styles.card, i === 1 ? styles.featured : ''].join(' ')}
                aria-label={`Testimonial from ${t.name}`}
              >
                <div className={styles.cardTopRow}>
                  <span className={styles.categoryBadge}>{t.category}</span>
                  <div className={styles.quoteIcon} aria-hidden="true">
                    <Quote size={22} />
                  </div>
                </div>

                <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} fill="#f5a623" color="#f5a623" />
                  ))}
                </div>

                <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>

                <div className={styles.author}>
                  <div className={styles.avatar} aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div className={styles.authorDetails}>
                    <p className={styles.name}>{t.name}</p>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button
              className={styles.controlBtn}
              onClick={prev}
              id="testimonial-prev-btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>

            <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={[styles.dot, i === current ? styles.activeDot : ''].join(' ')}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  id={`testimonial-dot-${i}`}
                />
              ))}
            </div>

            <button
              className={styles.controlBtn}
              onClick={next}
              id="testimonial-next-btn"
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Bottom Track Banner */}
          <div className={styles.trustBar}>
            <Award size={20} className={styles.trustIcon} />
            <span className={styles.trustText}>
              Proven track record in Robotics & AI education &bull; <strong>4.9★ Google rating</strong> &bull; Workshops delivered across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

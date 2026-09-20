'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './AboutFAQ.module.css';

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const aboutFaqs: FAQItem[] = [
  {
    id: 'about-faq-1',
    question: 'What makes CodeBotix the best ai and robotics classes for kids?',
    answer: (
      <>
        CodeBotix is widely recognized for offering the{' '}
        <strong className={styles.keywordHighlight}>best ai and robotics classes for kids</strong> because we prioritize
        hands-on, project-based 1:1 live learning over passive video tutorials. Every student receives a physical robotics
        kit delivered to their home and works directly with experienced mentors. Mentored by ISRO-recognized trainers, our
        structured curriculum empowers students aged 8 to 17 to build working hardware projects, program microcontrollers,
        and develop custom AI applications with true conceptual understanding.
      </>
    ),
  },
  {
    id: 'about-faq-2',
    question: 'How do your live 1:1 sessions deliver the best online robotics classes for kids?',
    answer: (
      <>
        Our personalized 1:1 format provides the{' '}
        <strong className={styles.keywordHighlight}>best online robotics classes for kids</strong> by giving each student
        dedicated, undivided attention from experienced trainers. Students work with real physical hardware kits at home—wiring
        breadboards, programming sensors, and debugging circuits in real time. This hands-on approach builds genuine problem-solving
        skills, technical resilience, and confidence that textbook learning simply cannot match.
      </>
    ),
  },
  {
    id: 'about-faq-3',
    question: 'What will my child learn in the best ai course for kids online?',
    answer: (
      <>
        In the <strong className={styles.keywordHighlight}>best ai course for kids online</strong>, students transition from
        being tech consumers to tech creators. They learn fundamental AI principles, prompt engineering, machine learning basics,
        computer vision, and build custom AI-powered applications, chatbots, and automation tools. Crucially, we also teach digital
        safety, critical thinking, and responsible AI ethics so children learn how to shape technology responsibly.
      </>
    ),
  },
  {
    id: 'about-faq-4',
    question: 'Does my child need any prior coding or technical experience to start?',
    answer: (
      <>
        No prior coding, engineering, or technical background is needed! Our programs are structured for all skill levels—from
        absolute beginners to advanced tech enthusiasts aged 8 to 17. Because all classes are held in a 1:1 live format, our mentors
        adapt the learning speed, project choices, and complexity to match your child&apos;s individual learning style and interests.
      </>
    ),
  },
  {
    id: 'about-faq-5',
    question: 'What hardware or equipment is required for CodeBotix online classes?',
    answer: (
      <>
        All your child needs is a computer or laptop with a stable internet connection and a webcam. For our robotics courses,
        we ship a complete, high-quality robotics kit containing microcontrollers, sensors, motors, breadboards, and electronic components
        directly to your doorstep. For AI and programming courses, all software platforms and tools used are free, secure, and accessible directly via browser.
      </>
    ),
  },
];

export default function AboutFAQ() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [openId, setOpenId] = useState<string | null>('about-faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={styles.section}
      id="faq"
      aria-label="Frequently Asked Questions"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <div className={styles.badge}>
            <HelpCircle size={14} /> GOT QUESTIONS?
          </div>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.subheading}>
            Everything you need to know about our hands-on AI and robotics programs for kids.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={[styles.faqList, isVisible ? styles.visible : ''].join(' ')}>
          {aboutFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={[styles.faqItem, isOpen ? styles.open : ''].join(' ')}
              >
                <button
                  className={styles.questionButton}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                  id={`question-${faq.id}`}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={styles.iconWrap}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className={styles.answerBody}
                    id={`answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`question-${faq.id}`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

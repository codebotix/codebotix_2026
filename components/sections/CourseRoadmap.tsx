'use client';

import { useState } from 'react';
import { Bot, BrainCircuit, CheckCircle2, Wrench, Clock, Package } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './CourseRoadmap.module.css';

/* ─── Data ─────────────────────────────────────────────────── */
const courses = {
  robotics: {
    id: 'robotics',
    label: 'Robotics Learning Path',
    icon: <Bot size={20} />,
    tagline: 'Progressive online robotics classes for kids with kit included, from circuit foundations to autonomous AI robots',
    levels: [
      {
        num: 1,
        badge: 'Level 1',
        title: 'Foundation Robotics',
        duration: '15 Days',
        topics: [
          'Robotics basics, safety & electronics',
          'Build robots with Arduino & sensors',
          'Learn coding, wiring & troubleshooting',
          'Test and present a working robot',
        ],
        projects: ['Light-following robot', 'Remote-controlled car', 'Working automated robot'],
        color: 'blue',
      },
      {
        num: 2,
        badge: 'Level 2',
        title: 'Intermediate Robotics',
        duration: '15 Days',
        topics: [
          'Advanced sensors & Arduino programming',
          'Build autonomous robots',
          'Learn wireless control & connectivity',
          'Test and showcase advanced robots',
        ],
        projects: ['Obstacle avoider bot', 'Smart IoT sensor system', 'Autonomous navigator'],
        color: 'orange',
      },
      {
        num: 3,
        badge: 'Level 3',
        title: 'Advanced Robotics',
        duration: '15 Days',
        topics: [
          'Advanced robotics & precision control',
          'AI vision, ML & IoT for robots',
          'Learn Wi-Fi, MQTT & remote control',
          'Build and present an AI-powered robot',
        ],
        projects: ['Autonomous delivery bot', 'AI-powered companion robot', '3D printed custom bot'],
        color: 'purple',
      },
    ],
  },
  ai: {
    id: 'ai',
    label: 'Artificial Intelligence Path',
    icon: <BrainCircuit size={20} />,
    tagline: 'Certified AI classes for kids from foundational AI principles to Deep Learning and Generative AI',
    kit: {
      included: true,
      label: 'Course Benefits & Inclusions',
      highlights: [
        'Live 1:1 Online Mentoring at CodeBotix',
        'AI Tools & Software Access Included',
        'ISRO-Recognized Certificate of Completion',
        'Project Portfolio & Learning Resources Included',
      ],
    },
    levels: [
      {
        num: 1,
        badge: 'Level 1',
        title: 'Foundation AI',
        duration: '15 Live Classes',
        topics: [
          "Understand what AI is and where it's used every day",
          'Use 10+ AI tools to create text, images, videos, music & presentations',
          'Learn prompt engineering and AI safety',
          'Build your own AI content portfolio',
        ],
        projects: ['AI Storybook', 'AI Advertisement Campaign', 'AI Video & Image Portfolio'],
        color: 'blue',
      },
      {
        num: 2,
        badge: 'Level 2',
        title: 'Intermediate AI',
        duration: '15 Live Classes',
        topics: [
          'Learn AI through Scratch & PictoBlox',
          'Build games using face, hand & object detection',
          'Train your own image recognition model',
          'Create interactive AI applications',
        ],
        projects: ['AI Face Detection Game', 'Image Recognition Model', 'Interactive AI Game'],
        color: 'orange',
      },
      {
        num: 3,
        badge: 'Level 3',
        title: 'Advanced AI',
        duration: '15 Live Classes',
        topics: [
          'Learn Python programming from scratch',
          'Connect applications with the Gemini API',
          'Design AI chatbot interfaces using Gradio',
          'Build and deploy a real-world AI chatbot',
        ],
        projects: ['AI Chatbot', 'Gradio Web Application', 'Final AI Capstone Project'],
        color: 'purple',
      },
    ],
  },
} as const;

type CourseKey = keyof typeof courses;

/* ─── Component ───────────────────────────────────────────────── */
export default function CourseRoadmap() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.08 });
  const [active, setActive] = useState<CourseKey>('robotics');

  const course = courses[active];

  return (
    <section
      className={styles.section}
      id="roadmap"
      aria-label="Course roadmap section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                Best Robotics & AI Course <span className={styles.accent}>Roadmap</span>
              </>
            }
            subtitle="Choose the best robotics course for kids or certified ai classes for kids and grow from beginner to tech leader, 15 days per level."
            theme="light"
          />

          {/* Tab switcher */}
          <div className={styles.tabs} role="tablist" aria-label="Course selection">
            {(Object.keys(courses) as CourseKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                aria-controls={`course-panel-${key}`}
                id={`course-tab-${key}`}
                className={[styles.tab, active === key ? styles.activeTab : ''].join(' ')}
                onClick={() => setActive(key)}
              >
                <span className={styles.tabIcon}>{courses[key].icon}</span>
                {courses[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Panel */}
        <div
          id={`course-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`course-tab-${active}`}
          className={[styles.panel, isVisible ? styles.visible : ''].join(' ')}
        >
          <p className={styles.tagline}>{course.tagline}</p>

          {/* Timeline */}
          <div className={styles.timeline} aria-label={`${course.label} levels`}>
            {/* Connector line */}
            <div className={styles.connectorLine} aria-hidden="true" />

            {course.levels.map((level, i) => (
              <div
                key={level.num}
                className={[
                  styles.levelBlock,
                  styles[`color-${level.color}`],
                  isVisible ? styles.visible : '',
                ].join(' ')}
                style={{ transitionDelay: `${0.15 + i * 0.15}s` }}
              >
                {/* Step number bubble */}
                <div className={styles.stepBubble} aria-hidden="true">
                  <span>{level.num}</span>
                </div>

                {/* Card */}
                <div className={styles.card}>
                  {/* Card header */}
                  <div className={styles.cardHead}>
                    <div className={styles.cardHeadLeft}>
                      <span className={styles.levelBadge}>{level.badge}</span>
                      <h3 className={styles.levelTitle}>{level.title}</h3>
                    </div>
                    <div className={styles.durationBadge}>
                      <Clock size={14} />
                      {level.duration}
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    {/* Curriculum topics */}
                    <div className={styles.topicsCol}>
                      <div className={styles.colHeader}>
                        <Wrench size={14} />
                        <span>What you&apos;ll learn</span>
                      </div>
                      <ul className={styles.topicList} aria-label={`Topics for ${level.title}`}>
                        {level.topics.map((t) => (
                          <li key={t} className={styles.topicItem}>
                            <CheckCircle2 size={14} className={styles.checkGreen} />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className={styles.divider} aria-hidden="true" />

                    {/* Projects */}
                    <div className={styles.projectsCol}>
                      <div className={styles.colHeader}>
                        <Bot size={14} />
                        <span>Projects you&apos;ll build</span>
                      </div>
                      <ul className={styles.projectList} aria-label={`Projects for ${level.title}`}>
                        {level.projects.map((p) => (
                          <li key={p} className={styles.projectItem}>
                            <span className={styles.projectDot} aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kit banner */}
          {'kit' in course && course.kit && (
            <div
              className={[
                styles.kitBanner,
                course.kit.included ? styles.kitIncluded : styles.kitPaid,
                isVisible ? styles.visible : '',
              ].join(' ')}
              style={{ transitionDelay: '0.6s' }}
            >
              {'highlights' in course.kit && course.kit.highlights ? (
                <div className={styles.kitHighlightsWrap}>
                  <div className={styles.kitHighlightsHeader}>
                    <Package size={20} aria-hidden="true" />
                    <span className={styles.kitLabel}>{course.kit.label}</span>
                  </div>
                  <div className={styles.kitHighlightsGrid}>
                    {course.kit.highlights.map((item) => (
                      <div key={item} className={styles.kitHighlightItem}>
                        <CheckCircle2 size={16} className={styles.checkGreen} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

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
    tagline: 'Progressive learning path from foundation circuits to AI-powered autonomous robots',
    kit: { price: '₹6,700', note: 'One-time · Delivery included · Yours to keep', label: 'Essential Learning Kit', included: false },
    levels: [
      {
        num: 1,
        badge: 'Level 1',
        title: 'Foundation Robotics',
        duration: '15 Days',
        topics: [
          'Introduction to electronics & circuit basics',
          'Hands-on with sensors, LEDs & motors',
          'Build your first working robot',
          'Learn block-based programming fundamentals',
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
          'Advanced sensor integration & motor control',
          'Text-based programming with Arduino',
          'Build autonomous robots with obstacle avoidance',
          'Introduction to IoT concepts',
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
          'Complex robotics systems & multi-sensor fusion',
          'Advanced programming & algorithm design',
          'Build AI-powered robotic projects',
          'Introduction to 3D printing for custom parts',
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
    tagline: 'Progressive learning path from AI fundamentals to Deep Learning & Generative AI',
    kit: { price: 'Classroom Materials Included', note: 'Curriculum & Software Access Included', label: 'All Learning Materials Included', included: true },
    levels: [
      {
        num: 1,
        badge: 'Level 1',
        title: 'Foundation AI',
        duration: '15 Days',
        topics: [
          'What is AI & Machine Learning, real-world examples',
          'Hands-on with visual AI tools & datasets',
          'Build your first image classifier',
          "Understand how computers 'learn' from data",
        ],
        projects: ['Image classification model', 'Visual AI dataset project', 'Smart pattern learner'],
        color: 'blue',
      },
      {
        num: 2,
        badge: 'Level 2',
        title: 'Intermediate AI',
        duration: '15 Days',
        topics: [
          'Python programming for AI applications',
          'Train custom machine learning models',
          'Natural language processing basics',
          'Build a chatbot from scratch',
        ],
        projects: ['Custom trained ML model', 'Conversational Chatbot', 'Text analysis engine'],
        color: 'orange',
      },
      {
        num: 3,
        badge: 'Level 3',
        title: 'Advanced AI',
        duration: '15 Days',
        topics: [
          'Deep learning & neural network fundamentals',
          'Computer vision & object detection projects',
          'Generative AI & creative applications',
          'Capstone project with real-world impact',
        ],
        projects: ['Object detection system', 'Generative AI app', 'Real-world Capstone AI project'],
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
                Our Course <span className={styles.accent}>Roadmap</span>
              </>
            }
            subtitle="Choose your learning path and grow from beginner to tech champion, 15 days per level."
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
          <div
            className={[
              styles.kitBanner,
              course.kit.included ? styles.kitIncluded : styles.kitPaid,
              isVisible ? styles.visible : '',
            ].join(' ')}
            style={{ transitionDelay: '0.6s' }}
          >
            <Package size={22} aria-hidden="true" />
            <div className={styles.kitText}>
              <span className={styles.kitLabel}>{course.kit.label}</span>
              <span className={styles.kitNote}>{course.kit.note}</span>
            </div>
            <span className={styles.kitPrice}>{course.kit.price}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './FAQ.module.css';

interface FAQData {
  id: string;
  category: 'all' | 'courses' | 'robotics-ai' | 'classes' | 'trust';
  categoryLabel: string;
  q: string;
  a: string;
}

const faqList: FAQData[] = [
  {
    id: 'faq-1',
    category: 'courses',
    categoryLabel: 'Courses',
    q: 'What age group is CodeBotix suitable for?',
    a: "CodeBotix offers live online AI and robotics classes for kids aged 10 to 17 years. Our curriculum is designed to match each student's learning level, whether they're complete beginners or already interested in technology.",
  },
  {
    id: 'faq-2',
    category: 'courses',
    categoryLabel: 'Courses',
    q: 'Does my child need any coding experience?',
    a: 'No. Our courses are beginner-friendly. Students start with the fundamentals before gradually learning programming, robotics, artificial intelligence, and problem-solving through hands-on projects.',
  },
  {
    id: 'faq-3',
    category: 'courses',
    categoryLabel: 'Courses',
    q: 'What courses does CodeBotix offer?',
    a: 'CodeBotix offers online ai and robotics classes for kids including certified ai classes for kids and personalized robotics classes for kids with kit included.',
  },
  {
    id: 'faq-4',
    category: 'robotics-ai',
    categoryLabel: 'AI & Robotics',
    q: 'What will my child learn in the best ai class for children?',
    a: 'In the best ai class for children at CodeBotix, students learn how AI works, explore tools like ChatGPT and Gemini, create text, images, videos, and chatbots, while mastering prompt engineering, AI ethics, automation, and responsible AI usage.',
  },
  {
    id: 'faq-5',
    category: 'robotics-ai',
    categoryLabel: 'AI & Robotics',
    q: 'What will my child learn in the Robotics course?',
    a: 'Our online robotics classes for kids teach students how to build and program real robots. They learn electronics, Arduino programming, sensors, motors, automation, and engineering concepts through exciting hands-on projects that develop creativity and problem-solving skills.',
  },
  {
    id: 'faq-6',
    category: 'robotics-ai',
    categoryLabel: 'AI & Robotics',
    q: 'Is Artificial Intelligence safe for children to learn?',
    a: 'Yes. At CodeBotix, students learn AI in a safe and age-appropriate environment. We also teach AI ethics, responsible AI usage, digital safety, and critical thinking so children understand how to use AI effectively and responsibly.',
  },
  {
    id: 'faq-7',
    category: 'robotics-ai',
    categoryLabel: 'AI & Robotics',
    q: 'Why should children learn AI today?',
    a: 'Artificial Intelligence is transforming almost every industry. Learning AI helps children develop creativity, problem-solving, digital literacy, and future-ready skills that will be valuable regardless of the career they choose.',
  },
  {
    id: 'faq-8',
    category: 'robotics-ai',
    categoryLabel: 'AI & Robotics',
    q: 'Can kids really learn Robotics online?',
    a: 'Absolutely. Our online robotics classes for kids combine expert 1:1 live instruction with physical robotics kits shipped to your doorstep, allowing students to build real projects from home while receiving personalized guidance.',
  },
  {
    id: 'faq-9',
    category: 'robotics-ai',
    categoryLabel: 'AI & Robotics',
    q: 'What is included in the Robotics Kit?',
    a: 'Every student in our robotics classes for kids with kit included receives a comprehensive hardware kit. The kit includes an Arduino-compatible microcontroller, breadboard, LEDs, resistors, over 10 sensors including ultrasonic and IR sensors, multiple motors, robot chassis, jumper wires, battery holder, and electronic components.',
  },
  {
    id: 'faq-10',
    category: 'classes',
    categoryLabel: 'Classes & Mentorship',
    q: 'How are the classes conducted?',
    a: 'All CodeBotix classes are conducted live in a 1:1 online format. Every student learns directly from an experienced mentor, asks questions in real time, and builds projects during each class for a highly personalized learning experience.',
  },
  {
    id: 'faq-11',
    category: 'classes',
    categoryLabel: 'Classes & Mentorship',
    q: 'What if my child misses a class?',
    a: 'If a student misses a class, our team helps them catch up through class recordings, additional mentor support, or a rescheduled makeup session based on availability.',
  },
  {
    id: 'faq-12',
    category: 'classes',
    categoryLabel: 'Classes & Mentorship',
    q: 'What kind of support does CodeBotix provide?',
    a: 'Students receive continuous support from their mentors throughout the course. Whether they need help with coding, robotics, AI tools, assignments, or projects, our instructors provide personalized guidance to ensure every student progresses with confidence.',
  },
  {
    id: 'faq-13',
    category: 'courses',
    categoryLabel: 'Courses',
    q: 'Are these AI classes for kids with real projects?',
    a: 'Yes! CodeBotix offers ai classes for kids with real projects. Students don’t just study theory, they build working AI applications, chatbots, and hardware robotics prototypes.',
  },
  {
    id: 'faq-14',
    category: 'courses',
    categoryLabel: 'Courses',
    q: 'Will my child receive a certificate?',
    a: 'Yes. Students receive a CodeBotix Certificate of Completion after successfully completing each course level and the required projects.',
  },
  {
    id: 'faq-15',
    category: 'trust',
    categoryLabel: 'Recognition & Global',
    q: 'Why choose CodeBotix over other AI and Robotics classes?',
    a: 'CodeBotix provides the best robotics and AI course for kids by combining live 1:1 mentoring, hands-on physical kits, and ISRO-recognized curriculum. Instead of watching pre-recorded videos, every student builds real projects with personal guidance.',
  },
  {
    id: 'faq-16',
    category: 'trust',
    categoryLabel: 'Recognition & Global',
    q: 'What recognition has CodeBotix received?',
    a: 'CodeBotix is led by ISRO-recognized robotics educators and founded by an Indian School of Business (ISB) alumnus. Our STEM initiatives have been supported through multiple U.S. Department of State grants, and we have successfully delivered Robotics and AI programs for Tamil Nadu Model Schools, empowering thousands of students with future-ready technology skills.',
  },
  {
    id: 'faq-17',
    category: 'classes',
    categoryLabel: 'Classes & Mentorship',
    q: 'Who teaches at CodeBotix?',
    a: 'Our students learn from experienced mentors specializing in Artificial Intelligence, Robotics, Programming, and STEM education. Every instructor undergoes a structured training process to ensure engaging, high-quality, and personalized learning in every live 1:1 class.',
  },
  {
    id: 'faq-18',
    category: 'trust',
    categoryLabel: 'Recognition & Global',
    q: 'Are CodeBotix classes available outside India?',
    a: 'Yes. CodeBotix offers online AI and Robotics classes for students worldwide. Students from India, the United States, Canada, the United Kingdom, Australia, Singapore, the UAE, and many other countries learn through our live online programs. All students need is a computer, a stable internet connection, and a passion for learning.',
  },
  {
    id: 'faq-19',
    category: 'courses',
    categoryLabel: 'Courses',
    q: 'What happens after completing all three levels?',
    a: 'After completing all three levels, students are equipped to build advanced AI and robotics projects independently. They can participate in competitions, create innovation portfolios, explore IoT and automation, and prepare for higher-level STEM education and future careers in technology.',
  },
  {
    id: 'faq-20',
    category: 'trust',
    categoryLabel: 'Recognition & Global',
    q: 'Why do parents choose CodeBotix?',
    a: 'Parents choose CodeBotix because we prepare children for a world shaped by Artificial Intelligence and emerging technologies. Through live 1:1 mentoring and project-based learning, students develop confidence, creativity, coding skills, engineering knowledge, AI literacy, critical thinking, and problem-solving abilities while building real-world projects, not just watching videos.',
  },
  {
    id: 'faq-21',
    category: 'trust',
    categoryLabel: 'Recognition & Global',
    q: 'Which countries does CodeBotix offer online AI and Robotics classes in?',
    a: 'CodeBotix offers online AI and Robotics classes for kids worldwide. Our students join from India, the United States, Canada, the United Kingdom, Australia, Singapore, the UAE, and many other countries. With flexible scheduling and live 1:1 classes, students can learn from anywhere in the world.',
  },
];

export default function FAQ() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.08 });
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const faqSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqList.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    };
  }, []);

  return (
    <section
      className={styles.section}
      id="faq"
      aria-label="Frequently asked questions section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.container}>
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                Frequently Asked <span className={styles.accent}>Questions</span>
              </>
            }
            subtitle="Everything parents and students need to know about CodeBotix online AI and robotics classes for kids."
            theme="dark"
          />

          <div className={styles.searchWrap}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search FAQs (e.g., 'Robotics Kit', 'Age 10-17', '1:1 Live', 'Certificate')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search frequently asked questions"
            />
          </div>

          {/* Category Filter Pills */}
          <div className={styles.filterBar} role="tablist" aria-label="FAQ category filter">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'courses', label: 'Courses & Curriculum' },
              { id: 'robotics-ai', label: 'AI & Robotics' },
              { id: 'classes', label: '1:1 Live Classes' },
              { id: 'trust', label: 'Recognition & Global' },
            ].map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={[styles.filterPill, activeCategory === cat.id ? styles.activePill : ''].join(' ')}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={[styles.accordion, isVisible ? styles.visible : ''].join(' ')}
          role="list"
          aria-label="FAQ accordion list"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={[styles.item, isOpen ? styles.open : ''].join(' ')}
                  style={{ transitionDelay: `${Math.min(i * 0.02, 0.3)}s` }}
                  role="listitem"
                >
                  <button
                    className={styles.question}
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                    id={`${faq.id}-btn`}
                  >
                    <span className={styles.qText}>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp size={20} className={styles.chevron} />
                    ) : (
                      <ChevronDown size={20} className={styles.chevron} />
                    )}
                  </button>
                  <div
                    id={`${faq.id}-answer`}
                    className={styles.answer}
                    role="region"
                    aria-labelledby={`${faq.id}-btn`}
                    hidden={!isOpen}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles.noResults}>
              <HelpCircle size={32} className={styles.noResultsIcon} />
              <p>No questions found matching &ldquo;{searchQuery}&rdquo;.</p>
              <button className={styles.clearSearchBtn} onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                View All Questions
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

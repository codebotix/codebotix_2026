'use client';

import { useState } from 'react';
import { CheckCircle2, Bot, BrainCircuit, Package, Truck, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Programs.module.css';

type ProgramKey = 'robotics' | 'ai';

interface LevelPlan {
  id: string;
  stepNum: number;
  levelNum: string;
  stage: string;
  originalPrice: string;
  price: string;
  period: string;
  features: string[];
}

const programData: Record<
  ProgramKey,
  {
    title: string;
    icon: React.ReactNode;
    description: string;
    levels: LevelPlan[];
    hasKit?: boolean;
  }
> = {
  robotics: {
    title: 'Robotics Program',
    icon: <Bot size={20} />,
    description: 'Hands-on hardware & coding track from circuit basics to AI-powered autonomous robots.',
    hasKit: true,
    levels: [
      {
        id: 'rob-l1',
        stepNum: 1,
        levelNum: 'Level 1',
        stage: 'Foundation',
        originalPrice: '₹7,200',
        price: '₹6,000',
        period: 'per level',
        features: [
          'Introduction to electronics & circuit basics',
          'Hands-on with sensors, LEDs & motors',
          'Build your first working robot',
          'Learn block-based programming fundamentals',
        ],
      },
      {
        id: 'rob-l2',
        stepNum: 2,
        levelNum: 'Level 2',
        stage: 'Intermediate',
        originalPrice: '₹7,500',
        price: '₹6,750',
        period: 'per level',
        features: [
          'Advanced sensor integration & motor control',
          'Text-based programming with Arduino',
          'Build autonomous robots with obstacle avoidance',
          'Introduction to IoT concepts',
        ],
      },
      {
        id: 'rob-l3',
        stepNum: 3,
        levelNum: 'Level 3',
        stage: 'Advanced',
        originalPrice: '₹8,500',
        price: '₹7,500',
        period: 'per level',
        features: [
          'Complex robotics systems & multi-sensor fusion',
          'Advanced programming & algorithm design',
          'Build AI-powered robotic projects',
          'Introduction to 3D printing for custom parts',
        ],
      },
    ],
  },
  ai: {
    title: 'AI Program',
    icon: <BrainCircuit size={20} />,
    description: 'Future-ready artificial intelligence track from ML fundamentals to Deep Learning.',
    hasKit: false,
    levels: [
      {
        id: 'ai-l1',
        stepNum: 1,
        levelNum: 'Level 1',
        stage: 'Foundation',
        originalPrice: '₹7,000',
        price: '₹6,750',
        period: 'per level',
        features: [
          'What is AI & Machine Learning, real-world examples',
          'Hands-on with visual AI tools & datasets',
          'Build your first image classifier',
          "Understand how computers 'learn' from data",
        ],
      },
      {
        id: 'ai-l2',
        stepNum: 2,
        levelNum: 'Level 2',
        stage: 'Intermediate',
        originalPrice: '₹8,000',
        price: '₹7,500',
        period: 'per level',
        features: [
          'Python programming for AI applications',
          'Train custom machine learning models',
          'Natural language processing basics',
          'Build a chatbot from scratch',
        ],
      },
      {
        id: 'ai-l3',
        stepNum: 3,
        levelNum: 'Level 3',
        stage: 'Advanced',
        originalPrice: '₹8,500',
        price: '₹8,250',
        period: 'per level',
        features: [
          'Deep learning & neural network fundamentals',
          'Computer vision & object detection projects',
          'Generative AI & creative applications',
          'Capstone project with real-world impact',
        ],
      },
    ],
  },
};

const stepClasses = [styles.step1, styles.step2, styles.step3];

export default function Programs() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.08 });
  const [activeTab, setActiveTab] = useState<ProgramKey>('robotics');

  const currentProgram = programData[activeTab];

  return (
    <section
      className={styles.section}
      id="programs"
      aria-label="Programs and pricing section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                Programs & <span className={styles.accent}>Pricing</span>
              </>
            }
            subtitle="Transparent pricing per level. All fees include expert instruction and comprehensive materials."
            theme="light"
          />

          {/* Program Tabs */}
          <div className={styles.tabs} role="tablist" aria-label="Program category selection">
            {(Object.keys(programData) as ProgramKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                id={`program-tab-${key}`}
                aria-controls={`program-panel-${key}`}
                className={[styles.tab, activeTab === key ? styles.activeTab : ''].join(' ')}
                onClick={() => setActiveTab(key)}
              >
                <span className={styles.tabIcon}>{programData[key].icon}</span>
                {programData[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panel */}
        <div
          id={`program-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`program-tab-${activeTab}`}
          className={[styles.panel, isVisible ? styles.visible : ''].join(' ')}
        >
          {/* Level Cards Grid (Progressive Staircase Layout) */}
          <div className={styles.grid}>
            {currentProgram.levels.map((plan, i) => (
              <div
                key={plan.id}
                className={[
                  styles.card,
                  stepClasses[i],
                  isVisible ? styles.visible : '',
                ].join(' ')}
                style={{ transitionDelay: `${i * 0.12}s` }}
                aria-label={`${plan.levelNum} ${plan.stage} plan`}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.stageTag}>{plan.stage}</span>
                  <h3 className={styles.planTitle}>{plan.levelNum}</h3>
                </div>

                <div className={styles.priceWrap}>
                  <div className={styles.priceColumn}>
                    <span className={styles.originalPrice}>{plan.originalPrice}</span>
                    <div className={styles.offerLine}>
                      <span className={styles.price}>{plan.price}</span>
                      <span className={styles.period}>{plan.period}</span>
                    </div>
                  </div>
                </div>

                <ul className={styles.featureList} aria-label={`Features of ${plan.levelNum}`}>
                  {plan.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Essential Learning Kit Box for Robotics */}
          {currentProgram.hasKit && (
            <div className={styles.kitCard}>
              <div className={styles.kitHeader}>
                <div className={styles.kitIconBadge}>
                  <Package size={24} />
                </div>
                <div className={styles.kitTitleWrap}>
                  <div className={styles.kitTopRow}>
                    <h4 className={styles.kitTitle}>Essential Learning Kit</h4>
                    <span className={styles.kitBadge}>Yours to Keep</span>
                  </div>
                  <p className={styles.kitDescription}>
                    One comprehensive kit covering all 3 levels: microcontroller, sensors, motors, breadboard, wires, battery pack & components.
                  </p>
                </div>
                <div className={styles.kitPriceWrap}>
                  <span className={styles.kitPrice}>₹6,700</span>
                  <span className={styles.kitPeriod}>one-time · delivery included</span>
                </div>
              </div>

              <div className={styles.kitFeatures}>
                <div className={styles.kitFeatureItem}>
                  <Truck size={18} className={styles.kitFeatureIcon} />
                  <span>Kit delivered to your doorstep within 1 week</span>
                </div>
                <div className={styles.kitFeatureItem}>
                  <Sparkles size={18} className={styles.kitFeatureIcon} />
                  <span>Classes start as soon as you receive your kit, hands-on from day one!</span>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer / Included Note */}
          <div className={styles.disclaimerNote}>
            <Sparkles size={16} className={styles.disclaimerIcon} />
            <span>Fees include expert instruction, comprehensive curriculum access, and all necessary classroom materials.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

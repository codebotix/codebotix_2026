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
    description: 'Personalized robotics classes for kids with kit included, taking students from foundation circuits to AI-powered autonomous robots.',
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
          'Understand how robots work, their real-world applications, and basic robotics concepts',
          'Learn electronics, sensors, motors, and Arduino fundamentals through hands-on activities',
          'Wire, code, and assemble the electronic and mechanical parts of a working robot',
          'Build and program a robot using both block-based and basic text coding',
          'Test, troubleshoot, and present a fully functional robot, building a strong foundation for Level 2',
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
          'Explore advanced sensors, motor control, microcontrollers, and real-world data',
          'Strengthen coding and control skills through Arduino-based robotics projects',
          'Design and build autonomous robots using sensor inputs and multi-sensor logic',
          'Develop robots that can sense, make decisions, navigate, and respond to their environment',
          'Test, refine, and present advanced autonomous robots, preparing for Level 3 Robotics',
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
          'Master advanced sensors, precision movement, localization, and multi-controller systems',
          'Build intelligent robots that can sense their surroundings and make decisions using AI',
          'Integrate Wi-Fi, ESP8266, MQTT, and IoT technologies for connected robotics',
          'Create robots that can share data, be monitored, and controlled remotely in real time',
          'Complete and present an advanced AI-powered, IoT-enabled robot designed for real-world applications',
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
        originalPrice: '₹7,999',
        price: '₹6,750',
        period: 'per level',
        features: [
          'Build a strong foundation in AI with safe and ethical usage',
          'Use popular AI tools confidently and get better results through smart prompting',
          'Identify different kinds of AI and understand real-world applications',
          'Produce original creative content using modern AI tools',
          'Showcase learning confidently through an AI-powered presentation',
        ],
      },
      {
        id: 'ai-l2',
        stepNum: 2,
        levelNum: 'Level 2',
        stage: 'Intermediate',
        originalPrice: '₹8,999',
        price: '₹7,500',
        period: 'per level',
        features: [
          'Build confidence in coding through fun drag-and-drop projects',
          'Create engaging interactive projects using coding and creativity',
          'Understand how AI can see, detect, and respond to the world',
          'Design and build exciting games using coding and AI logic',
          'Showcase learning confidently through projects and presentations',
        ],
      },
      {
        id: 'ai-l3',
        stepNum: 3,
        levelNum: 'Level 3',
        stage: 'Advanced',
        originalPrice: '₹9,999',
        price: '₹8,250',
        period: 'per level',
        features: [
          'Understand chatbot basics and identify where chatbots are used',
          'Build confidence in coding and create simple programs',
          'Build a complete rule-based chatbot that can talk with users',
          'Create a chatbot with an interactive and attractive interface',
          'Build and present an AI chatbot using modern technology',
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
            subtitle="Transparent pricing for online ai and robotics classes for kids with kit included and certified live mentoring."
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
          {/* Level Cards Grid */}
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
                    One comprehensive kit covering all 3 levels: microcontrollers, sensors, motors, breadboard, wires, battery pack & electronic components.
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
                  <span>Robotics kit delivered to your doorstep within 1 week</span>
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
            <span>Fees include 1:1 expert instruction, comprehensive curriculum access, and all necessary classroom materials.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

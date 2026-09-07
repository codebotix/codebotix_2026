'use client';

import Image from 'next/image';
import { ShieldCheck, Award, Star } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './CertificateShowcase.module.css';

const certFeatures = [
  { icon: <ShieldCheck size={22} />, label: 'ISRO Recognised' },
  { icon: <Award size={22} />, label: 'Globally Accepted' },
  { icon: <Star size={22} />, label: 'Industry Standard' },
];

export default function CertificateShowcase() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      className={styles.section}
      id="certificate"
      aria-label="Certificate showcase section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                Earn an <span className={styles.accent}>ISRO-Recognised</span> Certificate
              </>
            }
            subtitle="Our certificates are recognised by ISRO and accepted globally, a real credential that opens doors."
            theme="dark"
          />
        </div>

        <div className={[styles.grid, isVisible ? styles.visible : ''].join(' ')}>
          {/* Certificate Image Card */}
          <div className={styles.imageCard}>
            <div className={styles.certFrame}>
              <Image
                src="/isro-recognized-certificate-for-robotics-and-ai-classes-for-kids.jpeg"
                alt="CodeBotix ISRO-Recognised Certificate of Completion sample"
                width={500}
                height={350}
                className={styles.certImg}
                priority
              />
            </div>
            <div className={styles.certBadge}>
              <Award size={18} />
              <span>ISRO-Recognised Curriculum Certificate</span>
            </div>
          </div>

          {/* Certificate Info & Highlights */}
          <div className={styles.infoCol}>
            <div className={styles.infoContent}>
              <h3 className={styles.heading}>A Credential That Matters</h3>
              <p className={styles.description}>
                Every student who completes a CodeBotix level receives an official
                Certificate of Completion. Display it proudly for robotics
                competitions, college applications, and future careers. It&apos;s not just paper, it&apos;s proof
                of hands-on technical skill!
              </p>

              <div className={styles.featureList} aria-label="Certificate benefits">
                {certFeatures.map((f) => (
                  <div key={f.label} className={styles.featureItem}>
                    <span className={styles.checkIcon}>{f.icon}</span>
                    <span className={styles.featureTitle}>{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Endorsement highlight */}
              <div className={styles.endorsement}>
                <span className={styles.isroBadgeText}>
                  🏛️ Designed in alignment with STEM guidelines &amp; recognised by mentors from
                  Indian Space Research Organisation (ISRO) (Government of India)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

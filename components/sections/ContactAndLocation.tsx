'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './ContactAndLocation.module.css';

export default function ContactAndLocation() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={styles.section}
      id="contact"
      aria-label="Contact and location section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                Get in <span className={styles.accent}>Touch</span>
              </>
            }
            subtitle="Have questions about our robotics or AI programs? Reach out to us via email, phone, or visit our location in Chennai."
            theme="light"
          />
        </div>

        {/* 2-Column Layout: Contact Info Left, Map Right */}
        <div className={[styles.grid, isVisible ? styles.visible : ''].join(' ')}>
          {/* Left Column: Contact Cards */}
          <div className={styles.infoCol}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><Phone size={22} /></div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Call Us</p>
                <a href="tel:+919150395889" className={styles.contactValue} id="contact-phone">
                  +91 91503 95889
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><Mail size={22} /></div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Email Us</p>
                <a href="mailto:info.codebotix@gmail.com" className={styles.contactValue} id="contact-email">
                  info.codebotix@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><MapPin size={22} /></div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Location Address</p>
                <p className={styles.contactText}>
                  Sapphire square Apartments, 44/45, Perambur Barracks Rd, Dhibighat, Purasaiwakkam, Chennai, Tamil Nadu 600007, India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Map Embed */}
          <div className={styles.mapCol}>
            <div className={styles.mapWrap} aria-label="CodeBotix location map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.071728267258!2d80.2575!3d13.0945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ff6122d2f7%3A0x6b2b62788e02fa35!2sPerambur%20Barracks%20Rd%2C%20Purasaiwakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600007!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CodeBotix location in Chennai"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

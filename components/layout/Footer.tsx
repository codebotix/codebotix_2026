// components/layout/Footer.tsx
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { YouTubeIcon, InstagramIcon, FacebookIcon, TwitterIcon } from '@/components/ui/SocialIcons';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Courses', href: '/#programs' },
  { label: 'Pricing', href: '/#programs' },
  { label: 'Course Roadmap', href: '/#roadmap' },
  { label: 'Certificate', href: '/#certificate' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Blog & Articles', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: <YouTubeIcon size={20} />, href: 'https://youtube.com/@codebotix', label: 'YouTube' },
  { icon: <InstagramIcon size={20} />, href: 'https://instagram.com/codebotix', label: 'Instagram' },
  { icon: <FacebookIcon size={20} />, href: 'https://facebook.com/codebotix', label: 'Facebook' },
  { icon: <TwitterIcon size={20} />, href: 'https://twitter.com/codebotix', label: 'Twitter/X' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo" id="site-footer">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="/" className={styles.logo} aria-label="CodeBotix home" id="footer-logo">
              <span className={styles.logoIcon}>
                <Image
                  src="/codebotix_.png"
                  alt="CodeBotix logo"
                  width={160}
                  height={56}
                  className={styles.logoImg}
                />
              </span>
            </a>
            <p className={styles.tagline}>
              Online Robotics & AI Classes for Kids (Ages 10–17). Real projects. Real skills. Real future.
            </p>
            <div className={styles.socials} aria-label="Social media links">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={`CodeBotix on ${s.label}`}
                  id={`footer-social-${s.label.toLowerCase()}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList} role="list">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={styles.link} id={`footer-${l.label.toLowerCase().replace(/\s/g, '-')}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Programs</h3>
            <ul className={styles.linkList} role="list">
              <li><a href="#programs" className={styles.link} id="footer-robotics">Robotics Program</a></li>
              <li><a href="#programs" className={styles.link} id="footer-ai">AI Program</a></li>
              <li>
                <a
                  href="https://calendly.com/info-codebotix/codebotix-demo-class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  id="footer-free-demo"
                >
                  Free Demo Class
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Contact</h3>
            <div className={styles.contactInfo}>
              <a href="mailto:info.codebotix@gmail.com" className={styles.contactLink} id="footer-email">
                <Mail size={15} />
                info.codebotix@gmail.com
              </a>
              <a href="tel:+919150395889" className={styles.contactLink} id="footer-phone">
                <Phone size={15} />
                +91 91503 95889
              </a>
            </div>
            <div className={styles.isroBadge}>
              <span>🏛️</span>
              <span>ISRO-Recognised Curriculum</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} CodeBotix. All rights reserved.
          </p>
          <div className={styles.legal}>
            <span className={styles.legalText} id="footer-privacy">Privacy Policy</span>
            <span className={styles.legalText} id="footer-terms">Terms of Service</span>
            <span className={styles.legalText} id="footer-refund">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

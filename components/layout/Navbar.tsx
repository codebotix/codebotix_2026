'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#roadmap' },
  { label: 'Pricing', href: '#programs' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMobileOpen(false);

  return (
    <header
      className={[styles.header, isScrolled ? styles.scrolled : ''].join(' ')}
      role="banner"
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.container}>
          {/* Logo */}
          <a href="#" className={styles.logo} aria-label="CodeBotix home" id="nav-logo">
            <span className={styles.logoIcon}>
              <Image
                src="/codebotix_.png"
                alt="CodeBotix logo"
                width={130}
                height={42}
                priority
                className={styles.logoImg}
              />
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className={styles.navLinks} role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink} id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className={styles.navCta}>
            <Button
              href="https://calendly.com/info-codebotix/codebotix-demo-class"
              variant="primary"
              size="sm"
              id="nav-enroll-btn"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={[styles.mobileMenu, isMobileOpen ? styles.mobileOpen : ''].join(' ')}
          aria-hidden={!isMobileOpen}
        >
          <ul className={styles.mobileLinks} role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={handleLinkClick}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href="https://calendly.com/info-codebotix/codebotix-demo-class"
            variant="primary"
            fullWidth
            id="mobile-enroll-btn"
            onClick={handleLinkClick}
          >
            Enroll Now
          </Button>
        </div>
      </nav>
    </header>
  );
}

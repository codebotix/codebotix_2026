// components/ui/SectionHeader.tsx
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  tag?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={[styles.header, styles[align], styles[theme], className]
        .filter(Boolean)
        .join(' ')}
    >
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

'use client';

import { PlayCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './YoutubeShowcase.module.css';

const videos = [
  {
    id: 'vid-1',
    videoId: 'RaGsXeWfWa8',
    title: 'CodeBotix Students & Hands-On Robotics Workshop',
    embedUrl: 'https://www.youtube.com/embed/RaGsXeWfWa8',
  },
  {
    id: 'vid-2',
    videoId: '2N8VRcvbzwA',
    title: 'Live AI & Robotics Project Demo by CodeBotix',
    embedUrl: 'https://www.youtube.com/embed/2N8VRcvbzwA',
  },
];

export default function YoutubeShowcase() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={styles.section}
      id="videos"
      aria-label="YouTube video showcase section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={[styles.headerWrap, isVisible ? styles.visible : ''].join(' ')}>
          <SectionHeader
            title={
              <>
                Watch Our Students <span className={styles.accent}>In Action</span>
              </>
            }
            subtitle="Real projects built by real kids. See what's possible with CodeBotix."
            theme="light"
          />
          <a
            href="https://www.youtube.com/@codebotix"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ytLink}
            id="youtube-channel-link"
            aria-label="Visit CodeBotix YouTube channel"
          >
            <PlayCircle size={20} />
            View YouTube Channel
          </a>
        </div>

        <div className={styles.grid}>
          {videos.map((video, i) => (
            <div
              key={video.id}
              className={[styles.videoCard, isVisible ? styles.visible : ''].join(' ')}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.iframeWrap}>
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

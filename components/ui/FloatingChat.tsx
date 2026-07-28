'use client';

import { MessageCircle } from 'lucide-react';
import styles from './FloatingChat.module.css';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=919150395889&text=Hey+CodeBotix%2C+want+to+know+more+about+your+courses&type=phone_number&app_absent=0';

export default function FloatingChat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingChat}
      id="floating-chat-btn"
      aria-label="Chat and book demo on WhatsApp"
    >
      <MessageCircle size={20} strokeWidth={2.5} />
      <span>Chat and book demo</span>
    </a>
  );
}

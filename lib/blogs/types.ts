// lib/blogs/types.ts

export interface BlogContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'callout' | 'quote' | 'table';
  level?: 2 | 3;
  text?: string;
  items?: string[];
  calloutTitle?: string;
  headers?: string[];
  rows?: string[][];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: 'Robotics' | 'AI & Tech' | 'STEM Learning' | 'Tutorials' | 'News';
  date: string;
  readTime: string;
  featured?: boolean;
  coverGradient: string;
  tags: string[];
  content: BlogContentSection[];
}

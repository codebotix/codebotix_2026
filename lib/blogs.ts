// lib/blogs.ts
export * from './blogs/types';
import { BlogPost } from './blogs/types';
import { post1 } from './blogs/post-1-components';
import { post2 } from './blogs/post-2-choose-class';
import { post3 } from './blogs/post-3-why-learn';
import { post4 } from './blogs/post-4-cost';
import { post5 } from './blogs/post-5-group-vs-one-on-one';
import { post6 } from './blogs/post-6-certification';
import { post7 } from './blogs/post-7-about-codebotix';

export const BLOG_POSTS: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count: number = 2): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, count);
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, BookOpen, User } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getBlogPostBySlug, getAllBlogPosts, getRelatedPosts } from '@/lib/blogs';
import styles from './blog-post.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | CodeBotix Blog',
    };
  }

  const url = `https://www.codebotix.in/blog/${post.slug}`;

  return {
    title: `${post.title} | CodeBotix STEM Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 2);

  // Structured Data (JSON-LD) for Search Engine Article Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'CodeBotix',
      url: 'https://www.codebotix.in',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.codebotix.in/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className={styles.main}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <ChevronRight size={14} className={styles.breadcrumbSeparator} />
            <Link href="/blog" className={styles.breadcrumbLink}>
              Blog
            </Link>
            <ChevronRight size={14} className={styles.breadcrumbSeparator} />
            <span className={styles.breadcrumbActive}>{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className={styles.header}>
            <span className={styles.categoryTag}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            {post.subtitle && <p className={styles.subtitle}>{post.subtitle}</p>}

            {/* Article Meta */}
            <div className={styles.authorMeta}>
              <div className={styles.metaInfo}>
                <div className={styles.metaItem}>
                  <Calendar size={15} />
                  <span>{post.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={15} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Content & Sidebar Grid */}
          <div className={styles.contentGrid}>
            {/* Article Content */}
            <article className={styles.articleBody}>
              {post.content.map((section, idx) => {
                switch (section.type) {
                  case 'heading':
                    return section.level === 3 ? (
                      <h3 key={idx}>{section.text}</h3>
                    ) : (
                      <h2 key={idx}>{section.text}</h2>
                    );

                  case 'paragraph':
                    return <p key={idx}>{section.text}</p>;

                  case 'list':
                    return (
                      <ul key={idx}>
                        {section.items?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );

                  case 'callout':
                    return (
                      <div key={idx} className={styles.callout}>
                        {section.calloutTitle && (
                          <p className={styles.calloutTitle}>{section.calloutTitle}</p>
                        )}
                        <p>{section.text}</p>
                      </div>
                    );

                  case 'quote':
                    return (
                      <blockquote key={idx} className={styles.quote}>
                        {section.text}
                      </blockquote>
                    );

                  case 'table':
                    return (
                      <div key={idx} className={styles.tableWrapper}>
                        <table className={styles.contentTable}>
                          {section.headers && (
                            <thead>
                              <tr>
                                {section.headers.map((h, i) => (
                                  <th key={i}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                          )}
                          {section.rows && (
                            <tbody>
                              {section.rows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          )}
                        </table>
                      </div>
                    );

                  default:
                    return null;
                }
              })}

              {/* Tags */}
              <div className={styles.tagsRow}>
                <span className={styles.tagLabel}>Tags:</span>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tagItem}>
                    #{tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar Widgets */}
            <aside className={styles.sidebar}>
              {/* Enrollment CTA */}
              <div className={styles.ctaCard}>
                <Sparkles size={28} className="text-accent" style={{ margin: '0 auto 12px' }} />
                <h3 className={styles.ctaTitle}>Build Robots at Home</h3>
                <p className={styles.ctaText}>
                  Join CodeBotix Live 1:1 online classes with hardware kit & ISRO-recognised certification.
                </p>
                <a
                  href="https://calendly.com/info-codebotix/codebotix-demo-class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaBtn}
                >
                  Book Free Demo <ArrowRight size={16} />
                </a>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <section className={styles.relatedSection}>
              <h2 className={styles.relatedTitle}>Recommended Reading</h2>
              <div className={styles.relatedGrid}>
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className={styles.relatedCard}
                  >
                    <span className={styles.categoryTag} style={{ fontSize: '0.7rem' }}>
                      {rel.category}
                    </span>
                    <h3 className={styles.relatedCardTitle}>{rel.title}</h3>
                    <p className={styles.relatedCardExcerpt}>{rel.excerpt}</p>
                    <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Read Article <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

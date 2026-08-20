'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  Cpu,
  Bot,
  Brain,
  Rocket,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { getAllBlogPosts, BlogPost } from '@/lib/blogs';
import styles from './blog.module.css';

const categories = ['All', 'Robotics', 'AI & Tech', 'STEM Learning', 'News'];

function getPostIcon(slug: string, isFeatured: boolean = false) {
  const size = isFeatured ? 44 : 30;
  switch (slug) {
    case 'essential-robotics-components-for-kids':
      return <Cpu size={size} />;
    case 'how-to-choose-online-robotics-classes-for-kids':
      return <Bot size={size} />;
    case 'why-kids-should-learn-robotics-and-ai':
      return <Brain size={size} />;
    case 'online-robotics-classes-cost-for-kids':
      return <BookOpen size={size} />;
    case 'group-vs-one-on-one-robotics-classes-for-kids':
      return <Code2 size={size} />;
    case 'robotics-certification-for-kids-guide':
      return <Rocket size={size} />;
    case 'about-codebotix-online-ai-and-robotics':
      return <CheckCircle2 size={size} />;
    default:
      return <Sparkles size={size} />;
  }
}

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const blogPosts: BlogPost[] = getAllBlogPosts();
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <main className={styles.main}>
      {/* ---- Hero Section ---- */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="container">
          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>CodeBotix STEM Journal</span>
          </div>
          <h1 className={styles.title}>Articles, Insights & Guides</h1>
          <p className={styles.subtitle}>
            Explore essential robotics components, course guides, pricing breakdowns, certification benefits, and STEM insights for kids aged 10–17.
          </p>

          {/* Search & Category Filter */}
          <div className={styles.controls}>
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} size={18} />
              <input
                type="text"
                placeholder="Search articles by title, keyword, or components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Search blog posts"
              />
            </div>

            <div className={styles.categories} role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={[
                    styles.catBtn,
                    selectedCategory === cat ? styles.catActive : '',
                  ].join(' ')}
                  onClick={() => setSelectedCategory(cat)}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Blog Content Section ---- */}
      <section className={styles.section}>
        <div className="container">
          {/* Featured Post (Shown when on 'All' & no active search query) */}
          {selectedCategory === 'All' && !searchQuery && featuredPost && (
            <div>
              <h2 className={styles.sectionTitle}>
                <BookOpen size={22} className="text-accent" />
                Featured Guide
              </h2>

              <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredCard}>
                <div
                  className={styles.featuredBanner}
                  style={{ background: featuredPost.coverGradient }}
                >
                  <div className={styles.featuredIcon}>
                    {getPostIcon(featuredPost.slug, true)}
                  </div>
                </div>

                <div className={styles.featuredContent}>
                  <div className={styles.metaRow}>
                    <span className={styles.tag}>{featuredPost.category}</span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className={styles.featuredTitle}>{featuredPost.title}</h3>
                  <p className={styles.excerpt}>{featuredPost.excerpt}</p>

                  <div className={styles.authorRow}>
                    <span className={styles.readMoreBtn}>
                      Read Full Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Grid Section Title */}
          <h2 className={styles.sectionTitle}>
            <Sparkles size={22} className="text-accent" />
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>

          {/* Post Cards Grid */}
          <div className={styles.grid}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                  <div
                    className={styles.cardBanner}
                    style={{ background: post.coverGradient }}
                  >
                    <div className={styles.cardBannerIcon}>
                      {getPostIcon(post.slug, false)}
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.metaRow}>
                      <span className={styles.tag}>{post.category}</span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>

                    <div className={styles.authorRow}>
                      <span className={styles.readMoreBtn}>
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className={styles.emptyState}>
                <h3>No articles found</h3>
                <p>Try adjusting your search terms or selecting another category.</p>
              </div>
            )}
          </div>

          {/* Newsletter Card */}
          <div className={styles.newsletter}>
            <h2 className={styles.newsletterTitle}>
              Subscribe to CodeBotix STEM Journal
            </h2>
            <p className={styles.newsletterText}>
              Get weekly robotics component guides, AI experiment tips, course advice, and program updates delivered to your inbox.
            </p>

            {subscribed ? (
              <p style={{ color: 'var(--accent)', fontWeight: 600 }}>
                🎉 Thank you for subscribing! Check your inbox for our latest STEM guide.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Subscribe Free
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

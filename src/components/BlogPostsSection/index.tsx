import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import { motion } from "framer-motion";
import type { FeaturedBlogPost } from "@site/src/data/featuredBlogPosts";
import { useRecentBlogPosts } from "./useBlogPosts";
import styles from "./styles.module.css";

interface BlogPostCardProps {
  post: FeaturedBlogPost;
  delay?: number;
}

function BlogPostCard({ post, delay = 0 }: BlogPostCardProps): ReactNode {
  return (
    <div className="col col--4">
      <motion.article
        className={styles.blogPost}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay,
        }}
      >
        {post.imageUrl && (
          <div className={styles.headerImageContainer}>
            <img
              className={styles.headerImage}
              src={post.imageUrl}
              alt={`${post.title} blog post`}
            />
          </div>
        )}
        <div className={styles.postContent}>
          <div className={styles.postHeader}>
            <time dateTime={post.date} className={styles.postDate}>
              {post.formattedDate}
            </time>
            {post.readingTime && (
              <span className={styles.readingTime}>
                {post.readingTime} min read
              </span>
            )}
          </div>

          <Heading as="h3" className={styles.postTitle}>
            <Link to={post.permalink}>{post.title}</Link>
          </Heading>

          <p className={styles.postDescription}>{post.description}</p>

          {post.tags && post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <Link to={post.permalink} className={styles.readMore}>
            Read more →
          </Link>
        </div>
      </motion.article>
    </div>
  );
}

export default function BlogPostsSection(): ReactNode {
  // Use the custom hook to get the most recent 3 blog posts
  const recentBlogPosts = useRecentBlogPosts(3);

  if (recentBlogPosts.length === 0) {
    return null; // Don't render the section if no blog posts
  }

  return (
    <section className={styles.container}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" className={styles.title}>
            Latest Blog Posts
          </Heading>
        </motion.div>

        <div className="row">
          {recentBlogPosts.map((post, idx) => (
            <BlogPostCard key={post.id} post={post} delay={idx * 0.2} />
          ))}
        </div>

        <motion.div
          className={styles.viewAllContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link to="/blog" className="button button--secondary button--lg">
            View All Blog Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

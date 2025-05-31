import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

// Hardcoded blog posts data for now
// In production, this could be generated at build time
const recentBlogPosts = [
  {
    id: "building-aoa-agent-lovable-n8n",
    title: "Building AoA Agent with Lovable and n8n",
    description:
      "Learn how to build an AoA (Agent of Agents) using Lovable for the UI and n8n for workflow automation",
    date: "2025-05-31",
    formattedDate: "May 31, 2025",
    permalink: "/blog/2025-05-31-building-aoa-agent-lovable-n8n",
    tags: ["no-code", "lovable", "n8n"],
    readingTime: 5,
  },
  {
    id: "fastapi-mcp-client",
    title: "FastAPI MCP Client",
    description: "Building a FastAPI client for Model Context Protocol (MCP)",
    date: "2025-04-14",
    formattedDate: "April 14, 2025",
    permalink: "/blog/2025-04-14-fastapi-mcp-client",
    tags: ["fastapi", "mcp", "python"],
    readingTime: 8,
  },
  {
    id: "modular-ai-agents",
    title: "Modular AI Agents",
    description:
      "Design patterns and best practices for building modular AI agent systems",
    date: "2025-04-05",
    formattedDate: "April 5, 2025",
    permalink: "/blog/2025-04-05-modular-ai-agents",
    tags: ["ai", "agents", "architecture"],
    readingTime: 10,
  },
];

interface BlogPostCardProps {
  post: (typeof recentBlogPosts)[0];
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

          {post.tags.length > 0 && (
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

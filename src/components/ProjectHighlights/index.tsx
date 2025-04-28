import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import projectHighlights, { type ProjectHighlight } from '@site/src/data/projectHighlights';
import styles from './styles.module.css';

function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  link,
  delay = 0,
}: ProjectHighlight & { delay?: number }): ReactNode {
  return (
    <div className={clsx('col col--4')}>
      <motion.div
        className={styles.highlight}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay,
        }}
      >
        {imageUrl && (
          <div className={styles.headerImageContainer}>
            <img
              className={styles.headerImage}
              src={imageUrl}
              alt={`${title} project`}
            />
          </div>
        )}
        <div className={styles.content}>
          <Heading as="h3" className={styles.projectTitle}>
            {title}
          </Heading>
          <p className={styles.description}>{description}</p>
          
          <div className={styles.tags}>
            {technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className={styles.tag}>
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className={styles.tag}>+{technologies.length - 3}</span>
            )}
          </div>
          
          {link && (
            <Link to={link} className={styles.readMore}>
              Read case study
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectHighlights(): ReactNode {
  return (
    <section className={styles.container}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" className={styles.title}>
            Featured Projects
          </Heading>
        </motion.div>
        <div className="row">
          {projectHighlights.map((project, idx) => (
            <ProjectCard key={idx} {...project} delay={idx * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
} 
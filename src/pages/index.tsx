import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ProjectHighlights from "@site/src/components/ProjectHighlights";
import AboutSection from "@site/src/components/AboutSection";
import Heading from "@theme/Heading";
import { motion } from "framer-motion";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </motion.div>

          <div className={styles.buttons}>
            <motion.a
              className="button button--secondary button--lg"
              data-umami-event="View Resume"
              href="https://flowcv.com/resume/hkfj1w7dvdnp"
              target="_blank"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              🌐 View Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description="Personal website and blog of Jon Roosevelt"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ProjectHighlights />
        <AboutSection />
      </main>
    </Layout>
  );
}

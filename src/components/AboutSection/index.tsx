import React, { type ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

export default function AboutSection(): ReactNode {
  return (
    <section className={styles.container}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" className={styles.title}>
            About Jon
          </Heading>
        </motion.div>

        <div className="row">
          <div className={clsx("col col--4", styles.profileImageContainer)}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="/img/jon/jon-profile-pic.png"
                alt="Jon Roosevelt"
                className={styles.profileImage}
              />
            </motion.div>
          </div>

          <div className={clsx("col col--8", styles.bioContainer)}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className={styles.storyContainer}>
                <p className={styles.introText}>
                  Since I began programming in 2007, I've always wanted to
                  create something that makes a lasting difference in the lives
                  of billions. For me, healthcare technology is the ideal field
                  where my impact can be exponentially greater.
                </p>

                <p>
                  Remember when you were cooking dinner, chopping away, and then
                  - suddenly - the knife slipped? So does my wife, a talented
                  violinist who almost lost her index finger in a kitchen
                  accident. It's one of those incidents we see coming only in
                  slow-motion, right before everything speeds up.
                </p>

                <p>
                  You can probably imagine the panic as we dashed to the local
                  urgent care at around 7 p.m. To our surprise, there were no
                  other patients there. You'd think we'd be seen immediately,
                  but instead, the receptionist said the same old line, "You'll
                  be called when the provider is ready." As I held my anxious
                  wife within my arm's fold, I whispered comforting words into
                  her ear, a meager attempt to stifle her fear of never
                  returning to the stage.
                </p>

                <p>
                  However, the ticking hands of the clock engrossed us in a
                  torturous waiting game. Would she ever play the violin again?
                  Could we have gone to the emergency room? Probably, but who
                  knows how much longer that would've taken? So we sat for an
                  agonizing 45 minutes. Something about that didn't feel right.
                </p>
              </div>

              <div className={styles.experience}>
                <Heading as="h3" className={styles.sectionTitle}>
                  Experience
                </Heading>

                <div className={styles.experienceGrid}>
                  <div className={styles.experienceItem}>
                    <div className={styles.experiencePeriod}>2022 — Now</div>
                    <div className={styles.experienceRole}>Freelancer</div>
                  </div>

                  <div className={styles.experienceItem}>
                    <div className={styles.experiencePeriod}>2019 — 2022</div>
                    <div className={styles.experienceRole}>
                      Sr. Solution Architect / The Trade Desk
                    </div>
                  </div>

                  <div className={styles.experienceItem}>
                    <div className={styles.experiencePeriod}>2016 — 2019</div>
                    <div className={styles.experienceRole}>
                      Founder / Intellinum Analytics
                    </div>
                  </div>

                  <div className={styles.experienceItem}>
                    <div className={styles.experiencePeriod}>2014 — 2016</div>
                    <div className={styles.experienceRole}>
                      Staff Engineer / IBM Research
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.bio}>
                <p>
                  Jon has a solid background in the tech industry, recognized
                  for his strong work ethic and leadership in fast-paced
                  startups. He's very involved with LLM, Data, and Cloud. Before
                  joining Arcs Health, he sharpened his technical skills as a
                  Senior Solution Architect at The Trade Desk and a Senior
                  Software Engineer at IBM's Thomas J. Watson Research Center.
                </p>

                <p>
                  Jon is versatile across the entire tech stack in data
                  engineering and machine learning. He can take on roles such as
                  product manager, software engineer, solution architect and
                  client facing account manager. With over a decade of
                  experience in designing and managing data-intensive
                  applications using Spark, AWS, and Databricks, he has a proven
                  history of handling massive datasets up to 2.6 PB and
                  real-time streaming data.
                </p>

                <p>
                  In addition to his strong data engineering skills, Jon is also
                  a hands-on AI engineer with a solid grasp of LLM pre-training,
                  fine-tuning, and advanced RAG techniques.
                </p>

                <p>
                  Jon also holds an M.S. in Computer Science from New York
                  University.
                </p>
              </div>

              <div className={styles.ctaContainer}>
                <a
                  href="mailto:rooseveltadvisors@gmail.com"
                  className="button button--secondary button--lg"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

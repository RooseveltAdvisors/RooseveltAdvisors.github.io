import type { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "AI & Big Data Solutions",
    image: "/img/data_analytics.jpg",
    description: (
      <>
        15+ years building scalable data platforms and AI solutions across
        media, healthcare, and AdTech industries. Expert in real-time analytics
        systems processing petabytes of data.
      </>
    ),
  },
  {
    title: "Healthcare IT Solutions",
    image: "/img/healthcare_it.jpg",
    description: (
      <>
        Developed HIPAA-compliant IT systems that reduced clinical documentation
        time by 62% and integrated multiple healthcare data standards (FHIR,
        HL7, CCDA) to process millions of patient records daily.
      </>
    ),
  },
  {
    title: "Performance Optimization",
    image: "/img/cloud_computing.jpg",
    description: (
      <>
        Consistently delivered 50-85% performance improvements through cloud
        architecture optimization, ML pipeline efficiencies, and distributed
        systems engineering across AWS and Azure environments.
      </>
    ),
  },
];

function Feature({
  title,
  image,
  description,
  delay = 0,
}: FeatureItem & { delay?: number }) {
  return (
    <div className={clsx("col col--4")}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay,
        }}
      >
        <div className="text--center">
          <img src={image} className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} delay={idx * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}

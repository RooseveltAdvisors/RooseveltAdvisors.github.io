import type { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "AI & Big Data Solutions",
    Svg: require("@site/static/img/data_analytics.svg").default,
    description: (
      <>
        15+ years building scalable data platforms and AI solutions across media, healthcare, 
        and AdTech industries. Expert in real-time analytics systems processing 
        petabytes of data.
      </>
    ),
  },
  {
    title: "Healthcare IT Solutions",
    Svg: require("@site/static/img/healthcare_it.svg").default,
    description: (
      <>
        Developed HIPAA-compliant IT systems that reduced clinical documentation time by 62% 
        and integrated multiple healthcare data standards (FHIR, HL7, CCDA) to process 
        millions of patient records daily.
      </>
    ),
  },
  {
    title: "Performance Optimization",
    Svg: require("@site/static/img/cloud_computing.svg").default,
    description: (
      <>
        Consistently delivered 50-85% performance improvements through cloud architecture 
        optimization, ML pipeline efficiencies, and distributed systems engineering 
        across AWS and Azure environments.
      </>
    ),
  },
];

function Feature({
  title,
  Svg,
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
          <Svg className={styles.featureSvg} role="img" />
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

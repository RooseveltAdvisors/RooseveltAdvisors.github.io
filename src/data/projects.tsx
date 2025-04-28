/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from "@docusaurus/Translate";

// Implement our own sortBy function
function sortBy<T>(array: T[], getter: (item: T) => string | number): T[] {
  return [...array].sort((a, b) => {
    const valueA = getter(a);
    const valueB = getter(b);
    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
  });
}

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  | "ai"
  | "healthcare"
  | "data"
  | "cloud"
  | "architecture"
  | "engineering"
  | "llm"
  | "ml"
  | "consulting"
  | "research";

// Add sites to this list
// prettier-ignore
const Projects: Project[] = [
  {
    title: "Claraly: Physician co-pilot",
    description: 'Physician co-pilot that saves clinicians time so they can focus on practicing medicine. Generates notes ambiently, does dictation, recommends billing codes and answers questions.',
    preview: '/img/showcase/claraly.png',
    website: '/showcase/claraly',
    source: null,
    tags: ['ai', 'healthcare', 'llm'],
    client: 'Arcs Health',
    role: 'Architect',
    year: '2024',
  },
  {
    title: 'Data SME / NBC News',
    description: 'Served as the Data Subject Matter Expert for NBC News, providing expertise in data engineering and analysis for news reporting.',
    preview: '/img/showcase/nbc-news.png',
    website: '/showcase/data-sme-nbc-news',
    source: null,
    tags: ['data', 'consulting'],
    client: 'NBC News',
    role: 'Data SME',
    year: '2024',
  },
  {
    title: 'Healthcare Knowledge Graph',
    description: 'Designed and implemented a comprehensive healthcare knowledge graph to power advanced healthcare applications and insights.',
    preview: '/img/showcase/healthcare-knowledge-graph.png',
    website: '/showcase/healthcare-knowledge-graph',
    source: null,
    tags: ['healthcare', 'data', 'ai'],
    client: 'Arcs Health',
    role: 'Architect',
    year: '2024',
  },
  {
    title: 'Clinical Data Platform',
    description: 'Built a robust clinical data platform to streamline healthcare data management and analytics.',
    preview: '/img/showcase/clinical-data-platform.png',
    website: '/showcase/clinical-data-platform',
    source: null,
    tags: ['healthcare', 'data', 'cloud'],
    client: 'Preveta',
    role: 'Architect',
    year: '2023',
  },
  {
    title: 'ML for Adtech',
    description: 'Implemented machine learning solutions for advanced advertising technology applications.',
    preview: '/img/showcase/ttd-logo.png',
    website: '/showcase/ttd-sa',
    source: null,
    tags: ['ml', 'data', 'engineering'],
    client: 'The Trade Desk',
    role: 'Sr. Solution Architect',
    year: '2019',
  },
  {
    title: 'Tech Consulting',
    description: 'Provided expert technical consulting services for complex technology implementations.',
    preview: '/img/showcase/tech-consulting.png',
    website: '/showcase/tech-consulting',
    source: null,
    tags: ['consulting', 'architecture'],
    client: 'Intellinum Analytics',
    role: 'Founder',
    year: '2017',
  },
  {
    title: 'IBM FOAK',
    description: 'Worked on IBM First-of-a-Kind (FOAK) research projects to develop innovative technological solutions.',
    preview: '/img/showcase/ibm-foak.png',
    website: '/showcase/ibm-foak',
    source: null,
    tags: ['engineering', 'data', 'research'],
    client: 'IBM Research',
    role: 'Staff Engineer',
    year: '2015',
  },
];

export type Project = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
  client?: string;
  role?: string;
  year?: string;
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  ai: {
    label: translate({ message: "Artificial Intelligence" }),
    description: translate({
      message: "Projects involving AI and intelligent systems",
      id: "showcase.tag.ai.description",
    }),
    color: "#3bd671",
  },
  healthcare: {
    label: translate({ message: "Healthcare" }),
    description: translate({
      message: "Healthcare and medical technology solutions",
      id: "showcase.tag.healthcare.description",
    }),
    color: "#e9669e",
  },
  data: {
    label: translate({ message: "Data" }),
    description: translate({
      message: "Data engineering, analytics, and processing",
      id: "showcase.tag.data.description",
    }),
    color: "#4287f5",
  },
  cloud: {
    label: translate({ message: "Cloud" }),
    description: translate({
      message: "Cloud infrastructure and platforms",
      id: "showcase.tag.cloud.description",
    }),
    color: "#6c6dfa",
  },
  architecture: {
    label: translate({ message: "Architecture" }),
    description: translate({
      message: "System architecture and design",
      id: "showcase.tag.architecture.description",
    }),
    color: "#fe6829",
  },
  engineering: {
    label: translate({ message: "Engineering" }),
    description: translate({
      message: "Software and systems engineering",
      id: "showcase.tag.engineering.description",
    }),
    color: "#8c66db",
  },
  llm: {
    label: translate({ message: "LLM" }),
    description: translate({
      message: "Large Language Models and applications",
      id: "showcase.tag.llm.description",
    }),
    color: "#39ca30",
  },
  ml: {
    label: translate({ message: "Machine Learning" }),
    description: translate({
      message: "Machine learning algorithms and systems",
      id: "showcase.tag.ml.description",
    }),
    color: "#dfd545",
  },
  consulting: {
    label: translate({ message: "Consulting" }),
    description: translate({
      message: "Technical consulting and advisory services",
      id: "showcase.tag.consulting.description",
    }),
    color: "#a44fb7",
  },
  research: {
    label: translate({ message: "Research" }),
    description: translate({
      message: "Advanced research and innovation projects",
      id: "showcase.tag.research.description",
    }),
    color: "#2da5d5",
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortProjects() {
  let result = Projects;
  // Sort by site name
  result = sortBy(result, (project) => project.title.toLowerCase());
  // Sort by year, most recent first
  result = sortBy(result, (project) => -(project.year || "0"));
  return result;
}

export const sortedProjects = sortProjects();

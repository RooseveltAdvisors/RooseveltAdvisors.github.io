export type ProjectHighlight = {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  imageUrl?: string;
  technologies: string[];
  link?: string;
};

const projectHighlights: ProjectHighlight[] = [
  {
    title: "Claraly: Physician co-pilot",
    description: "Physician co-pilot that saves clinicians time so they can focus on practicing medicine.",
    challenge: "Physicians spend excessive time on administrative tasks like taking notes and coding, taking away from patient care.",
    solution: "Developed an AI co-pilot that generates clinical notes ambiently, handles dictation, recommends billing codes, and answers medical questions.",
    outcome: "Significantly reduced physicians' administrative workload, allowing them to focus more on patient care.",
    imageUrl: "/img/showcase/claraly.png",
    technologies: ["AI", "Healthcare", "LLM", "React", "NodeJS"],
    link: "/showcase/claraly",
  },
  {
    title: "Healthcare Knowledge Graph",
    description: "The Healthcare Knowledge Graph RAG with Neo4j, LangChain, and Llama 3 for enhanced clinical decision support.",
    challenge: "Traditional RAG systems struggle with broad questions about entire medical text corpora that require query-focused summarization.",
    solution: "Developed a Knowledge Graph RAG system using Neo4j, LangChain, and Llama 3 to improve comprehension of medical documents.",
    outcome: "Significantly improved the comprehensiveness and diversity of answers compared to basic RAG systems.",
    imageUrl: "/img/showcase/healthcare-knowledge-graph.png",
    technologies: ["Neo4j", "LangChain", "Llama 3", "Healthcare", "AI"],
    link: "/showcase/healthcare-knowledge-graph",
  },
  {
    title: "Clinical Data Platform",
    description: "Collecting data from various EHR vendors and building a data warehouse following the Medallion Architecture.",
    challenge: "Data ingestion bottlenecks were delaying client onboarding due to inefficient processing of diverse healthcare data formats.",
    solution: "Created an end-to-end data pipeline using the medallion architecture with Azure Data Pipeline, Databricks, and Synapse.",
    outcome: "Reduced client onboarding time from weeks to days by automating data ingestion processes.",
    imageUrl: "/img/showcase/clinical-data-platform.png",
    technologies: ["Azure", "Databricks", "SQL Server", "Healthcare", "Data Engineering"],
    link: "/showcase/clinical-data-platform",
  }
];

export default projectHighlights; 
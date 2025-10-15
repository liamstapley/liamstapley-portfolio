import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clapPoster from "../assets/projects/SummerScholarsPoster-CLAP.pdf";
import musicvisScreenshots from "../assets/projects/MusicVisScreenshots.pdf";
import clapScreenshots from "../assets/projects/CLAPMethodologyScreenshotDiagram.pdf";


type Project = {
  id: number;
  title: string;
  category: string;
  description: string[];
  skills: string;
  link: string;
  linkLabel: string;
  extra?: {
    description: string;
    links: { label: string; url: string }[];
  };
};

// === Project Data ===
const projects: Project[] = [
  {
    id: 1,
    category: "Independent Project",
    title: "RankRiser | Fitness App with AI-Powered Workout Guidance",
    description: [
      "Developing a fitness web/mobile app with an integrated GPT trained on web-scraped data to deliver science and experience-based workout advice.",
      "Implementing split trackers, rest timers, and live updates while managing full-stack development, database integration, and deployment workflows.",
    ],
    skills: "React, FastAPI, GPT, Web Scraping, SQL, Docker",
    link: "https://github.com/liamstapley/rankriser",
    linkLabel: "GitHub",
    extra: {
      description:
        "RankRiser is an AI-driven fitness platform that personalizes training programs using scientific and creator-based data. It integrates a modern FastAPI backend with a React frontend, enabling real-time workout tracking and split generation.",
      links: [
        { label: "GitHub Repo", url: "https://github.com/liamstapley/rankriser" },
        { label: "Live Preview (Coming Soon!)", url: "#" },
      ],
    },
  },
  {
    id: 2,
    category: "Competition Project",
    title: "1st Place: UD ASA DataFest 2025 | Byte Bandits",
    description: [
      "Collaborated in a 5-person team to clean, analyze, and visualize a multi-source real estate dataset with 700K+ rows during a 48-hour challenge.",
      "Led machine learning workflows with Scikit-Learn to extract key market trends and client-focused predictions.",
      "Earned “Best Insight” award at UD's ASA DataFest 2025 for high-impact real estate data analysis.",
    ],
    skills: "Python, Pandas, Matplotlib, Scikit-Learn, Tableau",
    link: "https://www.linkedin.com/posts/kathleenhiggins2028_i-am-honored-to-share-that-my-team-and-i-ugcPost-7330989105289326592-C_JW",
    linkLabel: "LinkedIn",
    extra: {
      description:
        "Byte Bandits developed a complete real estate analytics pipeline within 48 hours, combining statistical modeling and geospatial visualization to deliver actionable insights on housing affordability and migration patterns.",
      links: [
        {
          label: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/kathleenhiggins2028_i-am-honored-to-share-that-my-team-and-i-ugcPost-7330989105289326592-C_JW",
        },
        { label: "Team Summary PDF", url: "#" },
      ],
    },
  },
];

// === Sensify Lab Projects ===
const sensifyProjects: Project[] = [
  {
    id: 3,
    category: "Sensify Lab — Research Projects",
    title: "CLAP Research Platform (Summer Scholars 2025)",
    description: [
      "Coauthored a research paper evaluating AI-generated emotion descriptions for therapeutic music using the CLAP model.",
      "Developed a scalable full-stack MTurk-compatible platform (React + FastAPI + SQLite) to collect and analyze human evaluations of 400+ music clips.",
      "Implemented features including worker whitelisting, locally hosted .wav playback, and SQL-based response tracking for reproducible dataset creation.",
    ],
    skills: "React, FastAPI, SQLite, Docker, Tailwind, Nginx, Python",
    link: "https://www.linkedin.com/posts/liamstapley_this-past-thursday-i-had-a-great-time-presenting-activity-7363302665100918784-AcGs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFPCRwB92Zak-x99Llgvmjhg9wyZcHQnso",
    linkLabel: "LinkedIn Post",
    extra: {
      description:
        "Built for the Human-Centered Evaluation and Iterative Refinement of Weakly-Labeled Emotion Annotations for Therapeutic Music Using CLAP. The platform powered large-scale human evaluation of AI-generated emotion descriptions and helped shape the CalmSet dataset.",
      links: [
        { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/liamstapley_this-past-thursday-i-had-a-great-time-presenting-activity-7363302665100918784-AcGs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFPCRwB92Zak-x99Llgvmjhg9wyZcHQnso" },
        { label: "Paper (Pending Review)", url: "#" },
        { label: "Poster", url: clapPoster },
        { label: "Interface Flowchart", url: clapScreenshots }
      ],
    },
  },
  {
    id: 4,
    category: "Sensify Lab — Research Projects",
    title: "MusicVis Dashboard (Ongoing Lab Tool)",
    description: [
      "Built a modular FastAPI backend and React frontend for visualizing musical engagement data for children with ASD.",
      "Migrated the original Dash app to a clean FastAPI API and created a React dashboard with dropdown filters, participant layouts, and interactive plots.",
      "Implemented Sankey diagrams, covariance matrices, waveforms, and spectrograms using Plotly and Librosa.",
    ],
    skills: "React, FastAPI, Pandas, Plotly, Librosa, Docker, Tailwind, ShadCN",
    link: "#",
    linkLabel: "Dashboard",
    extra: {
      description:
        "The MusicVis Dashboard is a React + FastAPI platform designed for research visualization. It integrates audio data analysis, multi-modal visualization, and interactive exploration of ASD participant data in a modern, scalable environment.",
      links: [
        { label: "Paper (Pending Review)", url: "#" },
        { label: "Screenshots", url: musicvisScreenshots }
      ],
    },
  },
  {
    id: 5,
    category: "Sensify Lab — Research Projects",
    title: "Unity App Deployment (WebGL Integration)",
    description: [
      "Configured and deployed the lab's Unity-based therapeutic music application for web access via WebGL.",
      "Set up FastAPI and Nginx proxy routes on the lab's VM to host Unity builds securely and connect them to backend authentication systems.",
      "Resolved deployment and module issues to enable cross-platform accessibility and participant testing.",
    ],
    skills: "Unity, WebGL, FastAPI, Nginx, Docker, Linux VM",
    link: "#",
    linkLabel: "WebGL Build",
    extra: {
      description:
        "This project integrated the Sensify Lab's Unity-based audio therapy system into the lab's web infrastructure, allowing researchers and participants to access interactive musical experiences through a browser-based WebGL deployment.",
      links: [
        { label: "Web App Link (Pending)", url: "#" },
        { label: "Paper (Pending Review)", url: "#" },
      ],
    },
  },
];

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "auto";
  }, [expanded]);

  return (
    <>
      <h2 className="exp-category-title">Projects</h2>

      {/* === Regular Projects === */}
      {projects.map((p) => (
        <motion.div
          key={p.id}
          className="exp-card project-card"
          onClick={() => setExpanded(p)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="project-header">
            <h3 className="h3">{p.title}</h3>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon"
              aria-label={p.linkLabel}
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5H21m0 0v7.5m0-7.5L10.5 15"
                />
              </svg>
            </a>
          </div>

          <ul className="exp-list">
            {p.description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      {/* === Sensify Lab Section === */}
      <h2 className="exp-category-title" style={{ marginTop: "3rem" }}>
        Sensify Lab — Research Projects
      </h2>
      {sensifyProjects.map((p) => (
        <motion.div
          key={p.id}
          className="exp-card project-card"
          onClick={() => setExpanded(p)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="project-header">
            <h3 className="h3">{p.title}</h3>
          </div>

          <ul className="exp-list">
            {p.description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      {/* === Modal Popup === */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="modal-title">{expanded.title}</h3>
              <p className="muted modal-desc">{expanded.extra?.description}</p>

              <motion.div
                className="modal-skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.25 }}
              >
                <h4 className="edu-award-title">Skills / Technologies</h4>
                <p className="muted">{expanded.skills}</p>
              </motion.div>

              <div className="modal-links">
                {expanded.extra?.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
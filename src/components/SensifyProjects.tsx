import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sensifyProjects = [
  {
    id: "clap",
    title: "CLAP Research Platform (Summer Scholars 2025)",
    description: [
      "Coauthored research project on human-centered evaluation of AI-generated emotion descriptions for therapeutic music.",
      "Developed a custom MTurk-compatible survey platform using React + FastAPI + SQLite to evaluate over 2,000 audio clips.",
      "Integrated locally hosted .wav playback, whitelisted worker access, and SQL-backed response tracking.",
      "Collected data for the CalmSet dataset and supported iterative refinement of CLAP-based emotion labeling models."
    ],
    stack: ["React", "FastAPI", "SQLite", "Docker", "Python", "Tailwind", "Nginx"],
    links: [
      { label: "GitHub Repo", url: "#" },
      { label: "CHI 2026 Paper (Pending)", url: "#" },
    ],
  },
  {
    id: "musicvis",
    title: "MusicVis Dashboard (Ongoing Lab Tool)",
    description: [
      "Built a data visualization dashboard for analyzing musical engagement patterns in children with ASD.",
      "Migrated backend from Dash to FastAPI for modular API access and built a new React frontend with Tailwind + ShadCN + Framer Motion.",
      "Implemented visualizations including covariance matrices, Sankey diagrams, waveforms, and spectrograms using Plotly and Librosa.",
      "Containerized with Docker for reproducible deployment and cross-platform access."
    ],
    stack: ["React", "FastAPI", "Pandas", "Plotly", "Librosa", "Docker", "Tailwind"],
    links: [
      { label: "GitHub Repo", url: "#" },
      { label: "Internal Demo", url: "#" },
    ],
  },
  {
    id: "unity",
    title: "Unity App Deployment (WebGL Integration)",
    description: [
      "Deployed the lab’s Unity-based therapeutic music application to a web-accessible format using WebGL.",
      "Configured Nginx and FastAPI routes for Unity build hosting and authentication on the lab VM.",
      "Resolved proxy conflicts, module dependencies, and ensured stable web deployment for cross-platform participant testing.",
      "Bridged Unity’s real-time app data with the lab’s backend infrastructure to enable online music interaction studies."
    ],
    stack: ["Unity", "WebGL", "FastAPI", "Nginx", "Docker", "Linux VM"],
    links: [
      { label: "Deployment Docs", url: "#" },
      { label: "Internal Unity Build", url: "#" },
    ],
  },
];

const SensifyProjects: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggleCard = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <div className="sensify-container">
      {sensifyProjects.map((proj) => (
        <motion.div
          key={proj.id}
          layout
          className="exp-card sensify-card"
          onClick={() => toggleCard(proj.id)}
          whileHover={{ scale: openId === proj.id ? 1 : 1.02 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="sensify-header">
            <h3 className="h3">{proj.title}</h3>
          </div>

          <AnimatePresence>
            {openId === proj.id && (
              <motion.div
                className="sensify-expanded"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <ul className="exp-list">
                  {proj.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                <div className="modal-skills">
                  <h4 className="edu-award-title">Tech Stack</h4>
                  <p className="muted">{proj.stack.join(" • ")}</p>
                </div>

                <div className="modal-links">
                  {proj.links.map((l, i) => (
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
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default SensifyProjects;
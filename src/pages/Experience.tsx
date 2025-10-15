import React from "react";

const Experience: React.FC = () => {
  return (
    <>
      {/* === Professional Experience === */}
      <div className="exp-category">
        <h2 className="exp-category-title">Professional Experience</h2>

        {/* HenHacks */}
        <div className="exp-card">
          <div className="exp-header">
            <h4 className="exp-org">HenHacks</h4>
            <span className="exp-location">Newark, DE</span>
          </div>
          <div className="exp-subheader">
            <em>Logistics Team Lead</em> <span>• May 2025 - Present</span>
          </div>
          <ul className="exp-list">
            <li>Directing logistics for HenHacks, optimizing scheduling systems, venue setup, and stakeholder communication workflows.</li>
            <li>Coordinating cross-committee operations and mentoring interns using project management tools to foster structured learning.</li>
          </ul>

          <div className="exp-subheader">
            <em>Logistics Committee Intern</em> <span>• Oct 2024 - May 2025</span>
          </div>
          <ul className="exp-list">
            <li>Supported hackathon planning through scheduling, resource coordination, and cross-committee communication.</li>
            <li>Developed time management and collaboration skills in a fast-paced environment.</li>
          </ul>
        </div>

        {/* Sensify Lab */}
        <div className="exp-card">
          <div className="exp-header">
            <h4 className="exp-org">Sensify Lab</h4>
            <span className="exp-location">Newark, DE</span>
          </div>
          <div className="exp-subheader">
            <em>Undergraduate Researcher</em> <span>• Feb 2025 - Present</span>
          </div>
          <ul className="exp-list">
            <li>Engineering and deploying full-stack interactive dashboards using React, FastAPI, Docker, and Nginx.</li>
            <li>Resolved backend-frontend communication and applied IRB protocols for ethical, data-driven development.</li>
            <li>Led a Summer Scholars project evaluating AI-generated music emotion tags across 432 clips with human feedback.</li>
          </ul>
        </div>

        {/* TA Experience */}
        <div className="exp-card">
          <div className="exp-header">
            <h4 className="exp-org">University of Delaware</h4>
            <span className="exp-location">Newark, DE</span>
          </div>
          <div className="exp-subheader">
            <em>Computer Science Teaching Assistant, CISC106 & CISC181</em> <span>• Jan 2025 - Present</span>
          </div>
          <ul className="exp-list">
            <li>Led office hours and labs for Python and TypeScript courses, reinforcing software engineering best practices.</li>
            <li>Collaborated with professors to standardize instruction, grading, and evaluation criteria.</li>
          </ul>
        </div>
      </div>

      {/* === Leadership Experience === */}
      <div className="exp-category">
        <h2 className="exp-category-title">Leadership Experience</h2>

        <div className="exp-card">
          <div className="exp-header">
            <h4 className="exp-org">Computer Science for Social Good</h4>
            <span className="exp-location">Newark, DE</span>
          </div>
          <div className="exp-subheader">
            <em>Executive Board President</em> <span>• May 2025 - Present</span>
          </div>
          <ul className="exp-list">
            <li>Leading organizational initiatives to promote socially impactful tech solutions across campus.</li>
            <li>Overseeing project proposals, partnerships, and event planning while mentoring new members.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
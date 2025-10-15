import React from "react";

const Education: React.FC = () => {
  return (
    <>
      <h2 className="h2">Education</h2>

      {/* Main Education Section */}
      <div className="edu-grid">
        <div className="edu-card">
          <h3 className="edu-school">University of Delaware</h3>
          <p className="edu-sub muted">Junior • Newark, DE</p>

          <div className="edu-details">
            <p><strong>Majors:</strong> Computer Science (B.S.) • Mathematics and Data Science (B.S.)</p>
            <p><strong>Minor:</strong> Economics</p>
            <p><strong>Certificates:</strong> Technology Innovation & Entrepreneurship</p>
          </div>

          <div className="edu-divider" />

          {/* Awards Section */}
          <div className="edu-awards">
            <h4 className="edu-award-title">Academic Honors & Awards</h4>
            <ul>
              <li>Dean's List: Fall 2024, Spring 2025</li>
            </ul>
          </div>

          <div className="edu-divider" />

          <div className="edu-awards">
            <h4 className="edu-award-title">On Campus Involvement</h4>
            <ul>
              <li>President of Computer Science for Social Good</li>
              <li>Logistics Committee Head of the HenHacks Hackathon</li>
              <li>Undergraduate Researcher @ Sensify Lab</li>
              <li>Undergraduate TA for UD CISC Department (CISC108 & 181)</li>
              <li>Phase 2 Member of Delaware Innovation Fellows</li>
              <li>Data Analyst @ Blue Hen Data Analytics Club</li>
              <li>Calisthenics Club</li>
              <li>Intramural Soccer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
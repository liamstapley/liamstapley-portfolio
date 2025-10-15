import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div>
          <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Profile" />
          <h1>Liam Stapley</h1>
          <p className="muted">CS + Math and Data Science @ University of Delaware Honors College</p>
          <div className="icon-row" aria-label="Contact links">
            <a className="icon-btn" href="https://github.com/liamstapley" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/liamstapley" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a className="icon-btn" href="mailto:stapley.liam@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Skills</h2>
        <p className="muted">
          Java, Python (Pandas, Scikit-Learn, NumPy, Matplotlib), SQL, JavaScript, Typescript, C, C++, C#, Unity 3D, Unity WebGL Deployment, Docker, Nginx, React and FastAPI full stack development, Microsoft Office Suite (Excel)
        </p>
      </section>

      <section className="section">
        <h2 className="h2">About Me</h2>
        <p className="muted">
          I am a Computer Science and Data Science student at the University of Delaware passionate about developing impactful, user-focused technology. 
          My experience spans full-stack web development, data visualization, and machine learning. 
          I enjoy tackling projects that combine technical innovation with social good and collaboration. 
          Outside of academics, I enjoy listening to and playing music, watching movies/TV shows, and playing video games. 
          I also love going to the gym, playing soccer, and surfing.
        </p>
      </section>
    </>
  );
};

export default Home;
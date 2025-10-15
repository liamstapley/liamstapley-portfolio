import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Music
import brenn from "../assets/personal/music/brenn.jpg";
import dominic_fike from "../assets/personal/music/dominic_fike.jpg";
import don_toliver from "../assets/personal/music/don_toliver.jpg";
import metro from "../assets/personal/music/metro.jpg";
import noah_kahan from "../assets/personal/music/noah_kahan.jpg";

// Movies/TV
import batman from "../assets/personal/movies_TV/batman.avif";
import himym from "../assets/personal/movies_TV/himym.jpg";
import invincible from "../assets/personal/movies_TV/invincible.jpg";
import pokemon from "../assets/personal/movies_TV/pokemon.jpg";
import star_wars from "../assets/personal/movies_TV/star_wars.jpg";
import ttaft from "../assets/personal/movies_TV/tfatf.jpg";

// Games
import elden_ring from "../assets/personal/video_games/elden_ring.jpg";
import ghost from "../assets/personal/video_games/ghost.jpg";
import jedi_fallen from "../assets/personal/video_games/jedi_fallen.jpg";
import minecraft from "../assets/personal/video_games/minecraft.jpg";
import rdr2 from "../assets/personal/video_games/rdr2.webp";
import spiderman2 from "../assets/personal/video_games/spiderman2.webp";

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={prev}>‹</button>
      <img src={images[index]} alt="carousel" className="carousel-image" />
      <button className="carousel-btn right" onClick={next}>›</button>
    </div>
  );
};

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
            <a className="icon-btn" href="mailto:stapley.liam@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Skills</h2>
        <p className="muted">
          Java, Python (Pandas, Scikit-Learn, NumPy, Matplotlib), SQL, JavaScript, Typescript, C, C++, C#, Unity 3D, Unity WebGL Deployment, Docker, Nginx, React and FastAPI full stack development, Microsoft Office Suite (Excel), Prompt Engineering
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

  <div className="carousel-row">
    <div className="carousel-block">
      <h3 className="h3">Favroite Artists/Albums</h3>
      <Carousel images={[brenn, dominic_fike, don_toliver, metro, noah_kahan]} />
    </div>

    <div className="carousel-block">
      <h3 className="h3">Favorite Movies/TV Shows</h3>
      <Carousel images={[batman, himym, invincible, pokemon, star_wars, ttaft]} />
    </div>

    <div className="carousel-block">
      <h3 className="h3">Favorite Video Games</h3>
      <Carousel images={[elden_ring, ghost, jedi_fallen, minecraft, rdr2, spiderman2]} />
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
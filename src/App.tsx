import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./components/NavBar";
import ArrowNav from "./components/ArrowNav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

const SECTIONS = [
  { name: "Home", component: <Home /> },
  { name: "Projects", component: <Projects /> },
  { name: "Experience", component: <Experience /> },
  { name: "Education", component: <Education /> }
];

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | "bottom" | "none">("none");

  const next = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % SECTIONS.length);
  };

  const prev = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + SECTIONS.length) % SECTIONS.length);
  };

  const variants = {
    enter: (dir: string) => ({
      x: dir === "right" ? 1000 : dir === "left" ? -1000 : 0,
      y: dir === "bottom" ? 1000 : 0,
      opacity: 0
    }),
    center: { x: 0, y: 0, opacity: 1 },
    exit: (dir: string) => ({
      x: dir === "right" ? -1000 : dir === "left" ? 1000 : 0,
      y: dir === "bottom" ? -1000 : 0,
      opacity: 0
    })
  };

  return (
    <>
      <NavBar active={SECTIONS[index].name} setIndex={setIndex} setDirection={setDirection} />
      <AnimatePresence mode="wait" custom={direction}>
        <motion.main
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.45, ease: "easeOut" }}
        >
          <div className="container">{SECTIONS[index].component}</div>
        </motion.main>
      </AnimatePresence>
      <ArrowNav
        prev={prev}
        next={next}
        labels={{
          prev: SECTIONS[(index - 1 + SECTIONS.length) % SECTIONS.length].name,
          next: SECTIONS[(index + 1) % SECTIONS.length].name
        }}
      />
    </>
  );
};

export default App;
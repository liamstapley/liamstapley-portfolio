import React from "react";

interface Props {
  active: string;
  setIndex: (i: number) => void;
  setDirection: (d: "left" | "right" | "bottom" | "none") => void;
}

const NavBar: React.FC<Props> = ({ active, setIndex, setDirection }) => {
  const sections = ["Home", "Projects", "Experience", "Education"];

  return (
    <nav className="navbar" aria-label="Primary">
      {sections.map((name, i) => (
        <button
          key={name}
          onClick={() => {
            setDirection("none");
            setIndex(i);
          }}
          className={`navlink ${active === name ? "active" : ""}`}
        >
          {name}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
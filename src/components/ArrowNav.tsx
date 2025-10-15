import React, { useState } from "react";

type Props = {
  prev: () => void;
  next: () => void;
  labels: { prev: string; next: string };
};

/* Custom tall arrow SVGs */
const TallChevronLeft: React.FC = () => (
  <svg
    viewBox="0 0 24 100"
    width="24"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20,2 4,50 20,98" />
  </svg>
);

const TallChevronRight: React.FC = () => (
  <svg
    viewBox="0 0 24 100"
    width="24"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4,2 20,50 4,98" />
  </svg>
);

const ArrowButton: React.FC<{
  side: "left" | "right";
  label: string;
  onClick: () => void;
}> = ({ side, label, onClick }) => {
  const [hover, setHover] = useState(false);

  const posClass = side === "left" ? "arrow-left" : "arrow-right";

  // Tooltip placement
  const style: React.CSSProperties =
    side === "left"
      ? { left: 86, top: "50%", transform: "translateY(-50%)" }
      : { right: 86, top: "50%", transform: "translateY(-50%)" };

  return (
    <>
      <button
        className={`arrow ${posClass}`}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={label}
      >
        {side === "left" ? <TallChevronLeft /> : <TallChevronRight />}
      </button>
      {hover && (
        <div className="arrow-label" style={style}>
          {label}
        </div>
      )}
    </>
  );
};

const ArrowNav: React.FC<Props> = ({ prev, next, labels }) => {
  return (
    <>
      <ArrowButton side="left" label={`Go to ${labels.prev}`} onClick={prev} />
      <ArrowButton side="right" label={`Go to ${labels.next}`} onClick={next} />
    </>
  );
};

export default ArrowNav;
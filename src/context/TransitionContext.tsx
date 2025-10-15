import React, { createContext, useContext, useState } from "react";

export type Direction = "left" | "right" | "bottom" | "none";

type Ctx = { direction: Direction; setDirection: (d: Direction) => void; };
const TransitionContext = createContext<Ctx>({ direction: "none", setDirection: () => {} });

export const useTransitionDir = () => useContext(TransitionContext);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [direction, setDirection] = useState<Direction>("none");
  return (
    <TransitionContext.Provider value={{ direction, setDirection }}>
      {children}
    </TransitionContext.Provider>
  );
};
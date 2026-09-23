"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
const Experience = createContext({ still: false, toggle: () => {} });
export function ExperienceProvider({ children }: { children: ReactNode }) {
  const preference = useReducedMotion();
  const [reduced, setReduced] = useState(false);
  useEffect(() => setReduced(!!preference), [preference]);
  const [paused, setPaused] = useState(false);
  const still = !!reduced || paused;
  return <Experience.Provider value={{ still, toggle: () => setPaused(v => !v) }}><MotionConfig reducedMotion={still ? "always" : "user"}><div data-still={still}>{children}</div></MotionConfig></Experience.Provider>;
}
export const useExperience = () => useContext(Experience);


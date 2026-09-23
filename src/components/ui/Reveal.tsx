"use client";
import { motion } from "framer-motion";
import { useExperience } from "@/hooks/useExperience";
export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { still } = useExperience();
  return <motion.div className={className} initial={false} whileInView={still ? undefined : { opacity: [0.35, 1], y: [16, 0] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

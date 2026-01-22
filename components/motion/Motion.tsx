"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 6 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

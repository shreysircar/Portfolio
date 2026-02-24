"use client";

import { motion } from "framer-motion";

export default function AnimatedTagline() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1.2,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        pt-6
        pl-10 lg:pl-24
        text-[20px]
        tracking-tight
        bg-gradient-to-r
        from-neutral-400
        via-neutral-500
        to-neutral-600
        bg-clip-text
        text-transparent
      "
    >
      System-first thinking.
    </motion.p>
  );
}
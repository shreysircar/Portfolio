import { motion } from "framer-motion";

export function PageXPreview() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <img src="/pagex.png" className="max-h-72" />
    </motion.div>
  );
}
import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
      }}
    >
      {children}
    </motion.h2>
  );
}

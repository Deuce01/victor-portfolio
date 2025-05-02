"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-semibold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-neutral-700 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        I'm Victor Chege — a passionate software developer from Nairobi, Kenya.
        I craft elegant systems that solve real-world problems, from smart
        travel planning to home service automation. My work combines clarity,
        minimalism, and quiet sophistication. I love building tools that speak
        softly yet carry power.
      </motion.p>
    </section>
  );
}

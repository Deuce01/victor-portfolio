"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-24 max-w-6xl mx-auto">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-6xl font-extrabold tracking-tight mb-6 text-black leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Victor Chege
        </motion.h1>

        <motion.p
          className="text-2xl font-semibold text-neutral-700 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Software Developer crafting systems that are{" "}
          <span className="text-black font-bold">simple</span>,{" "}
          <span className="text-black font-bold">elegant</span>, and{" "}
          <span className="text-black font-bold">quietly powerful</span>.
        </motion.p>
      </div>

      {/* Circular Photo */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-black shadow-[0_4px_30px_rgba(0,0,0,0.1)]
">
          <Image
            src="/me.jpg" 
            alt="Portrait of Victor Chege, Software Developer"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}

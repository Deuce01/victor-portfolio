"use client";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="text-center py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        className="text-neutral-600 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm always open to collaborations, ideas, or just a friendly hello.
      </motion.p>

      <motion.div
        className="flex justify-center gap-6 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="https://github.com/victorchege"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-black transition"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/victorchege"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-black transition"
        >
          <FiLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/victorchege"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-black transition"
        >
          <FiTwitter size={24} />
        </a>
        <a
          href="https://wa.me/254791271674?text=Hi%20Victor%2C%20I%20just%20checked%20your%20portfolio%20and%20would%20love%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-800 transition"
        >
          <FaWhatsapp size={24} />
        </a>
      </motion.div>

      <motion.a
        href="mailto:victor@example.com"
        className="inline-flex items-center gap-2 text-white bg-black px-6 py-3 rounded-full hover:bg-neutral-800 transition"
        whileHover={{ scale: 1.05 }}
      >
        <Mail size={20} /> Say Hello
      </motion.a>
    </section>
  );
}

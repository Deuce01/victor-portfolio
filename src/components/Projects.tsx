"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "TripXpert",
    description: "Smart travel planner with real-time recommendations.",
    image: "/projects/tripxpert.jpg",
    link: "#",
  },
  {
    title: "HomeMaster",
    description: "Home service management system with scheduling and billing.",
    image: "/projects/homeservice.jpg",
    link: "#",
  },
  {
    title: "SeatSavvy",
    description: "Streamlined ticket booking with intuitive UI/UX.",
    image: "/projects/seatsavvy.jpg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <motion.h2
        className="text-4xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            className="group block overflow-hidden rounded-2xl border bg-white shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

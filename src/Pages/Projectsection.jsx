import React from "react";
import { motion } from "framer-motion";

// === Sample Project Data ===
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with 3D elements, smooth animations, and responsive design.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    img: "/mylogo.png", // replace with actual image path
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with authentication, product listing, and payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    img: "/mylogo.png",
    link: "#",
  },
  {
    title: "Interactive Dashboard",
    description: "A responsive dashboard with charts, dark mode, and real-time data visualization.",
    tech: ["React", "Chart.js", "TailwindCSS"],
    img: "mylogo.png", // replace with actual image path
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 bg-black text-white flex flex-col items-center px-6"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-purple-400 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 cursor-pointer relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
              <motion.a
                href="{project.link}"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import TiltedCard from "../Components/TitleCard";

const techIcons = [
  <FaHtml5 className="text-orange-500" />,
  <FaCss3Alt className="text-blue-500" />,
  <FaJs className="text-yellow-400" />,
  <FaReact className="text-cyan-400" />,
  <FaNodeJs className="text-green-500" />,
  <SiMongodb className="text-green-600" />,
  <SiTailwindcss className="text-sky-400" />,
  <FaDatabase className="text-gray-400" />,
];

// === Timeline Data ===
const timelineData = [
  {
    year: "2023 – Present",
    title: "Frontend Developer",
    company: "Freelance",
    description:
      "Building modern, responsive websites using React, TailwindCSS, and animations.",
  },
  {
    year: "2021 – 2023",
    title: "MERN Stack Developer",
    company: "Startup Projects",
    description:
      "Worked with MongoDB, Express, React, Node.js to create full-stack apps.",
  },
  {
    year: "2019 – 2021",
    title: "Internship & Learning",
    company: "Personal Projects",
    description:
      "Hands-on learning with HTML, CSS, JavaScript, and UI/UX basics.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-black text-white flex flex-col items-center"
    >
      {/* === INTRO + PHOTO SECTION === */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left: Intro */}
        <div className="space-y-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-purple-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          {/* Typing Effect */}
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-gray-200"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderRight: "2px solid #a855f7",
            }}
          >
            I’m a Web Developer
          </motion.h3>

          {/* Paragraph with blur to visible */}
          <motion.p
            className="text-gray-400 leading-relaxed"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            I specialize in crafting interactive, animated, and responsive web
            applications. My focus is on clean UI, smooth UX, and modern
            technologies like React, TailwindCSS, and Node.js.
          </motion.p>
        </div>

        {/* Right: Photo with electricity glow */}
        {/* <motion.div
          className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-purple-500"
          whileHover={{ boxShadow: "0 0 35px rgba(168,85,247,0.8)" }}
        >
          <img
            src="/My portrait.jpg"
            alt="My Portrait"
            className="w-full h-100 object-cover"
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 animate-pulse shadow-[0_0_25px_rgba(168,85,247,0.7)]"></div>
        </motion.div> */}

        <TiltedCard
          imageSrc="/My portrait.jpg"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Sunil sain"
          containerHeight="700px"
          containerWidth="304px"
          imageHeight="400px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>
      {/* Auto Scrolling Tech Icons */}
      <div className="overflow-hidden whitespace-nowrap my-20 w-full">
        <motion.div
          className="flex gap-16 text-6xl"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {Array(8)
            .fill(techIcons)
            .flat()
            .map((icon, i) => (
              <div
                key={i}
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] flex-shrink-0"
              >
                {icon}
              </div>
            ))}
        </motion.div>
      </div>

      {/* === TIMELINE === */}
      <div className="relative w-full max-w-4xl mt-20 px-6">
        {/* Static Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-pink-500 rounded-full transform -translate-x-1/2"></div>

        <div className="space-y-14 sm:space-y-20 relative z-10">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } items-center md:items-start`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              {/* Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500 border-4 border-black shadow-[0_0_15px_rgba(168,85,247,0.9)] animate-pulse"></div>

              {/* Card */}
              <motion.div
                className={`w-full sm:w-[90%] md:w-[320px] bg-zinc-900 p-6 rounded-xl border border-purple-500/30 transition cursor-pointer mt-8 md:mt-0
                  ${
                    index % 2 === 0
                      ? "md:mr-auto md:ml-12"
                      : "md:ml-auto md:mr-12"
                  }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(168,85,247,0.6)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="text-sm text-gray-400">{item.year}</span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-purple-400">{item.company}</p>
                <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

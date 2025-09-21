import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 py-10 border-t border-purple-500/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo / Name */}
        <h2 className="text-xl font-bold text-white">
          My <span className="text-purple-400">Portfolio</span>
        </h2>

        {/* Center: Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/sunilsain00912"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sunil-kumar-sain-1a97b935a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sunil. All Rights Reserved.
        </p>
      </div>

      {/* Glowing line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-[0_0_15px_rgba(236,72,153,0.6)]"></div>
    </footer>
  );
};

export default Footer;

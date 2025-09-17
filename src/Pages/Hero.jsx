import React from "react";
import TrueFocus from "../Components/TrueFocus";
import Lanyard from "../Components/Lanyard";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16  mt-30">
      {/* Left Side: Text Content */}
      <div className="flex flex-col justify-center items-start space-y-6 text-white max-w-lg relative z-10">
        <TrueFocus
          sentence="Aspiring Full-Stack Developer"
          manualMode={false}
          blurAmount={5}
          borderColor="white"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />

        <p className="text-base sm:text-lg text-gray-300  mb-15">
          {" "}
          Hi, I'm Sunil — a passionate Full-Stack Developer. I love building
          fast, responsive, and user-friendly web apps. Specialized in React,
          Node.js, and MongoDB. Always exploring new technologies to sharpen my
          skills. Let’s create something impactful together!
        </p>

        <div className="flex space-x-4">
          <button className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:text-whitetransition">
            Hire Me
          </button>
          <button className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition">
            View Projects
          </button>
        </div>
      </div>
      <img
        height={1000}
        width={700}
        src="/illustration-png.webp"
        alt="illustration.png"
      />

      <div className="absolute inset-0  justify-center items-center z-30 pointer-events-auto lg:flex">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import TrueFocus from "../Components/TrueFocus";
import Lanyard from "../Components/Lanyard";
// import ModelViewer from "../Components/ModelViewer";


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

        <p className="text-base sm:text-lg text-gray-300">
          
            {" "}
            Crafting seamless web experiences with React, Node.js, and MongoDB.
            Crafting seamless web experiences with React, Node.js, and MongoDB.
            Crafting seamless web experiences with React, Node.js, and MongoDB.
          
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




{/* <ModelViewer
  url="/ToyCar.glb"
  width={400}
  height={400}
/> */}





 
       <div className="absolute inset-0 flex justify-center items-center z-20 pointer-events-auto">
        <Lanyard position={[0, 0, 20]} gravity={[0, -80, 0]} />
      </div> 
    </section>
  );
};

export default Hero;






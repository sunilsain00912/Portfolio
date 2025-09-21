import React from "react";
import "./index.css";
import CardNav from "./Components/CardNav";
import SplashCursor from "./Components/Spalshcursor";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Projects from "./Pages/Projectsection";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        // { label: "Company", ariaLabel: "About Company" },
        { label: "About-me", ariaLabel: "About " },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "My-frojects", ariaLabel: "Projects" },
        
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Github", ariaLabel: "Github" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <SplashCursor />
      <Hero />

      {/* Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent my-20 shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div>
      <About />
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent my-20 shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div>

      <Projects />
      {/* Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent my-20 shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div>

      <Contact />

      <Footer />
      {/* Navbar (Sticky at top) */}
      <div className="fixed top-0 left-0 w-full z-20">
        <CardNav
          // logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>
    </div>
  );
};

export default App;

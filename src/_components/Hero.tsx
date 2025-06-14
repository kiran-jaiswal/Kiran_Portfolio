import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import AnimatedText from "./AnimatedText";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base font-medium text-accent-400 mb-4"
        >
          Hello, I'm
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
        >
          Kiran Jaiswal
        </motion.h1>

        <AnimatedText
          text="A Creative Developer & Designer Crafting Beautiful Digital Experiences"
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
        >
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
          <a
            href="/OncampusCV.pdf"
            className="btn-outline flex items-center gap-2"
            download
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <a href="#about" className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <ChevronDown className="text-primary-500" />
          </a>
        </motion.div>
      </motion.div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary/10 via-background-primary to-background-primary z-0"></div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full filter blur-[80px] z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-accent-500/20 rounded-full filter blur-[80px] z-0"></div>
    </section>
  );
};

export default Hero;

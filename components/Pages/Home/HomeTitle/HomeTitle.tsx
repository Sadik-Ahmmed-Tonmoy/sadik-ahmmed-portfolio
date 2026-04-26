"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode, FaTerminal } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const HomeTitle = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  // Initialize with deterministic values that will be replaced after mount
  const [floatingElements, setFloatingElements] = useState(() => {
    // This runs once during initial render, but with deterministic values
    // Using a seeded approach or fixed values for initial render
    return [...Array(12)].map((_, i) => ({
      left: (i * 7) % 100, // Deterministic distribution
      top: (i * 13) % 100,
      symbol: ["</>", "{}", "[]", "()", "fn", "dev", "src", "npm"][i % 8],
      duration: 8 + (i % 4),
      delay: (i % 4),
    }));
  });
  
  const fullText = "// Welcome to my digital universe...";

  // Generate random elements after mount using requestAnimationFrame or setTimeout
  useEffect(() => {
    // Use setTimeout to defer the state update
    const timer = setTimeout(() => {
      const elements = [...Array(12)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        symbol: ["</>", "{}", "[]", "()", "fn", "dev", "src", "npm"][Math.floor(Math.random() * 8)],
        duration: 8 + Math.random() * 4,
        delay: Math.random() * 4,
      }));
      setFloatingElements(elements);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  // Typing animation
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br relative overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Elements */}
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-500/10 text-lg sm:text-2xl font-mono select-none"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          >
            {element.symbol}
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]"></div>
      </div>

      <motion.div className="relative z-10 max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
        {/* Header Badge */}
        <motion.div variants={itemVariants} className="flex justify-center sm:justify-start mb-8 sm:mb-12">
          <Slide>
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 bg-slate-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-full py-2 sm:py-3 px-4 sm:px-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <AiOutlineHome className="text-lg sm:text-xl text-emerald-400" />
              </motion.div>
              <span className="text-white font-semibold tracking-wider text-sm sm:text-base">HOME</span>
            </motion.div>
          </Slide>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-12">
          {/* Terminal Window */}
          <motion.div variants={itemVariants} className="w-full max-w-2xl">
            <div className="bg-slate-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-t-lg p-3 sm:p-4 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <FaTerminal className="text-emerald-400 text-sm" />
                <span className="text-slate-400 text-sm font-mono">~/home/developer.js</span>
              </div>
            </div>
            <div className="bg-slate-950/90 backdrop-blur-sm border-x border-b border-emerald-500/30 rounded-b-lg p-4 sm:p-6 text-left">
              <div className="font-mono text-emerald-400 text-sm sm:text-base">
                <span className="text-purple-400">const</span>
                <span className="text-white"> universe = </span>
                <span className="text-cyan-300">new</span>
                <span className="text-yellow-400"> DigitalWorld</span>
                <span className="text-white">();</span>
                <br />
                <span className="text-slate-500">{typedText}</span>
                {showCursor && <span className="text-emerald-400 animate-pulse">|</span>}
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <motion.h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <motion.span className="block mb-2 sm:mb-4" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <span className="text-white">&quot;Code is the </span>
                <motion.span
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  bridge
                </motion.span>
              </motion.span>

              <motion.span
                className="block mb-2 sm:mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-emerald-400">Between</span>
              </motion.span>

              <motion.span className="block mb-2 sm:mb-4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                <span className="text-white">Human </span>
                <motion.span
                  className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  ideas
                </motion.span>
              </motion.span>

              <motion.span className="block mb-2 sm:mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
                <span className="text-emerald-400">And</span>
              </motion.span>

              <motion.span className="block" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3 }}>
                <span className="text-white">The </span>
                <motion.span
                  className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  digital universe
                </motion.span>
                <span className="text-white">&quot;</span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              I design and code beautifully simple things and I love what I do.
              <span className="text-emerald-400"> Let&apos;s build something amazing together.</span>
            </motion.p>
          </motion.div>

          {/* Animated Fire/Energy Effect */}
          <motion.div
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="relative h-24 sm:h-32 lg:h-36 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Pulsing orbs representing energy/fire */}
              <motion.div
                className="absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80"
                animate={{
                  scale: [1.2, 0.8, 1.2],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <motion.div
                className="absolute w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-white to-yellow-300 rounded-full"
                animate={{
                  scale: [0.8, 1.4, 0.8],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />

              {/* Code icon in center */}
              <motion.div
                className="relative z-10 text-slate-900"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FaCode className="text-lg sm:text-xl lg:text-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeTitle;
"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import { useEffect, useState } from "react";
import { BsCursorFill, BsFillPersonLinesFill } from "react-icons/bs";
import { FaCode, FaGithub, FaLaptopCode, FaLinkedinIn, FaTerminal } from "react-icons/fa";
import { MdDeveloperMode, MdLightbulb, MdRocketLaunch } from "react-icons/md";
import { SiExpress, SiJavascript, SiJsonwebtokens, SiMongodb, SiNextdotjs, SiNodedotjs, SiPrisma, SiReact, SiTailwindcss } from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: number;
}

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [floatingElements, setFloatingElements] = useState<Array<{
    left: number;
    top: number;
    text: string;
    duration: number;
    delay: number;
  }>>([]);
  
  const fullText = "// Welcome to my digital world...";

  // Generate random elements after mount
  useEffect(() => {
    const elements = [...Array(10)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      text: ['const', 'function', 'return', 'import', 'export', 'async', 'await'][Math.floor(Math.random() * 7)],
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 3,
    }));
    setFloatingElements(elements);
  }, []);

  // Typing animation
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const skills: Skill[] = [
    { name: "React", icon: <SiReact />, color: "text-blue-400", level: 90 },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", level: 85 },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-400", level: 85 },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", level: 80 },
    { name: "Prisma", icon: <SiPrisma />, color: "text-slate-300", level: 75 },
    { name: "Express", icon: <SiExpress />, color: "text-gray-400", level: 85 },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", level: 95 },
    { name: "JWT", icon: <SiJsonwebtokens />, color: "text-purple-400", level: 80 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400", level: 90 }
  ];

  const stats: Stat[] = [
    { number: "4+", label: "years Exp", icon: <MdDeveloperMode /> },
    { number: "150+", label: "Projects", icon: <FaLaptopCode /> },
    { number: "100%", label: "Problem Solver", icon: <MdLightbulb /> },
    { number: "∞", label: "Learning", icon: <MdRocketLaunch /> }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.5
      }
    })
  };

  // Animation for floating icons - using a simple animation without custom parameters
  const floatingAnimation: TargetAndTransition = {
    y: [0, -10, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br relative overflow-hidden py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Elements */}
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-500/5 text-sm sm:text-xl font-mono select-none hidden sm:block"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay
            }}
          >
            {element.text}
          </motion.div>
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* Terminal Header */}
          <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="bg-slate-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-t-lg p-2 sm:p-3 flex items-center gap-1 sm:gap-2">
              <div className="flex gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-4">
                <FaTerminal className="text-emerald-400 text-xs sm:text-sm" />
                <span className="text-slate-400 text-xs sm:text-sm font-mono">~/about/developer.js</span>
              </div>
            </div>
            <div className="bg-slate-950/90 backdrop-blur-sm border-x border-b border-emerald-500/30 rounded-b-lg p-3 sm:p-6 text-left">
              <div className="font-mono text-emerald-400 text-xs sm:text-sm md:text-base">
                <span className="text-purple-400">const</span>
                <span className="text-white"> developer = </span>
                <span className="text-cyan-300">new</span>
                <span className="text-yellow-400"> Developer</span>
                <span className="text-white">();</span>
                <br />
                <span className="text-slate-500">{typedText}</span>
                {showCursor && <BsCursorFill className="inline ml-1 text-emerald-400" />}
              </div>
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 sm:gap-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-full py-2 sm:py-3 px-4 sm:px-6 mb-6 sm:mb-8 shadow-lg"
          >
            <motion.div
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <BsFillPersonLinesFill className="text-lg sm:text-2xl text-emerald-400" />
            </motion.div>
            <span className="text-white font-semibold tracking-wider text-sm sm:text-base">ABOUT.DEV</span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <motion.span
                className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Every great
              </motion.span>
              <br />
              <span className="text-white">design begins with</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                an even better
              </motion.span>
              <br />
              <span className="text-emerald-400">story</span>
            </motion.h1>

            {/* Story Content */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl"
            >
              <div className="space-y-4 sm:space-y-6 text-slate-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-sm sm:text-base lg:text-lg"
                >
                  <span className="text-lg sm:text-2xl">👋</span> Hey! I&apos;m <span className="text-emerald-400 font-semibold">Sadik Ahmmed Tonmoy</span>, 
                  a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> passionate about creating seamless web experiences. <span className="text-lg sm:text-2xl">🚀</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="text-sm sm:text-base"
                >
                  I specialize in React, Next.js, Node.js, and modern authentication with JWT. 
                  I love building scalable applications with clean code and intuitive UX.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-sm sm:text-base"
                >
                  <span className="text-lg sm:text-2xl">🎯</span> From e-commerce platforms to dynamic web apps, 
                  I focus on <span className="text-purple-400 font-semibold">performance, security, and user experience</span>.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
                >
                  <motion.a
                    href="https://www.linkedin.com/in/sadikahmmedtonmoy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base"
                  >
                    <FaLinkedinIn />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/Sadik-Ahmmed-Tonmoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-3 sm:px-4 py-2 rounded-full hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 text-sm sm:text-base"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Philosophy Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  💡
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-400 mb-2 sm:mb-3">Philosophy</h3>
                <p className="text-slate-300 italic text-sm sm:text-base">
                  &ldquo;Clean code, seamless UX, endless learning.&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-emerald-500/20 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 text-center shadow-xl hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <motion.div
                    className="text-xl sm:text-2xl lg:text-3xl text-emerald-400 mb-1 sm:mb-2 flex justify-center"
                    animate={floatingAnimation}
                    transition={{ delay: index * 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl"
            >
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 flex items-center gap-2 sm:gap-3">
                  <FaCode className="text-emerald-400" />
                  <span>Tech Stack</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <motion.div
                          className={`text-sm sm:text-lg lg:text-xl ${skill.color}`}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="text-slate-400 text-xs sm:text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full relative"
                        variants={skillBarVariants}
                        initial="hidden"
                        animate="visible"
                        custom={skill.level}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
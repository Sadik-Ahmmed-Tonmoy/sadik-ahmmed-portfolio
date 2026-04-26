/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { BiCodeBlock } from "react-icons/bi";
import { FaCode, FaRocket, FaShieldAlt, FaTerminal } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { VscVmConnect } from "react-icons/vsc";
import developerLottie from "@/assets/Lotties/animation_llui246z.json";
import responsiveLottie from "@/assets/Lotties/animation_lluj483i.json";
import securityLottie from "@/assets/Lotties/animation_llujmaeh.json";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  techStack: string[];
  gradient: string;
  borderGradient: string;
  lottie: any;
  delay: number;
}

const Services = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  // Initialize with deterministic values to avoid setState in effect
  const [floatingElements] = useState(() => {
    // These values are deterministic but still provide variety
    return [...Array(12)].map((_, i) => ({
      left: (i * 13) % 97 + 1, // Deterministic distribution 1-98
      top: (i * 27) % 95 + 2,  // Deterministic distribution 2-97
      text: ['<div>', '</div>', 'const', 'function', 'return', 'import', 'export', 'async', 'await', '{', '}', '=>'][i % 12],
      duration: 8 + (i % 7),    // 8 to 14
      delay: (i % 6) * 0.8,     // 0 to 4
    }));
  });
  
  const fullText = "// Building tomorrow's web experiences...";

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

  const services: Service[] = [
    {
      title: "Full Stack Web Development",
      description: "With a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in full-stack web development. From designing user interfaces that engage users to crafting robust backend systems, I thrive on delivering seamless and dynamic web experiences.",
      icon: <FaCode />,
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "from-blue-500 to-cyan-500",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
      lottie: developerLottie,
      delay: 0.2
    },
    {
      title: "Responsive Design",
      description: "As a MERN developer, I'm dedicated to creating web experiences that adapt seamlessly across devices and screen sizes. Responsive design is not just a feature, it's a philosophy that I embed into every project I undertake.",
      icon: <MdDevices />,
      techStack: ["Tailwind", "CSS Grid", "Flexbox", "Mobile-First"],
      gradient: "from-emerald-500 to-teal-500",
      borderGradient: "from-emerald-500/30 to-teal-500/30",
      lottie: responsiveLottie,
      delay: 0.4
    },
    {
      title: "Web Security",
      description: "As a MERN developer, I prioritize the security of web applications as an integral part of the development process. Web security isn't an afterthought for me, it's a fundamental principle that guides every line of code I write.",
      icon: <FaShieldAlt />,
      techStack: ["JWT", "OAuth", "HTTPS", "Data Encryption"],
      gradient: "from-purple-500 to-pink-500",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      lottie: securityLottie,
      delay: 0.6
    }
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

  const cardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (delay: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
        delay: delay
      }
    })
  };

  const floatingAnimation: TargetAndTransition = {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div id="services" className="min-h-screen bg-gradient-to-br relative overflow-hidden py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
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
              y: [0, -40, 0],
              opacity: [0.03, 0.1, 0.03],
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
        
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <polygon points="50,1 95,25 95,62 50,86 5,62 5,25" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" className="text-emerald-500" />
          </svg>
        </div>
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
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="bg-slate-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-t-lg p-2 sm:p-3 flex items-center gap-1 sm:gap-2">
              <div className="flex gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-4">
                <FaTerminal className="text-emerald-400 text-xs sm:text-sm" />
                <span className="text-slate-400 text-xs sm:text-sm font-mono">~/services/specializations.js</span>
              </div>
            </div>
            <div className="bg-slate-950/90 backdrop-blur-sm border-x border-b border-emerald-500/30 rounded-b-lg p-3 sm:p-6 text-left">
              <div className="font-mono text-emerald-400 text-xs sm:text-sm md:text-base h-10">
                <span className="text-purple-400">const</span>
                <span className="text-white"> services = </span>
                <span className="text-cyan-300">await</span>
                <span className="text-yellow-400"> getSpecializations</span>
                <span className="text-white">();</span>
                <br />
                <span className="text-slate-500">{typedText}</span>
                {showCursor && <span className="inline-block ml-1 w-2 h-4 bg-emerald-400 animate-pulse"></span>}
              </div>
            </div>
          </div>

          {/* Services Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 sm:gap-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-full py-2 sm:py-3 px-4 sm:px-6 mb-6 sm:mb-8 shadow-lg"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <VscVmConnect className="text-lg sm:text-2xl text-emerald-400" />
            </motion.div>
            <span className="text-white font-semibold tracking-wider text-sm sm:text-base">SERVICES</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <span className="text-white">My </span>
            <motion.span
              className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Specializations
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={service.delay}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group relative bg-slate-900/50 backdrop-blur-sm border border-gradient-to-r ${service.borderGradient} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}></div>
              
              {/* Content Grid */}
              <div className="relative z-10 grid lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                {/* Text Content */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                  {/* Service Header */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div
                      className={`flex-shrink-0 p-2 sm:p-3 bg-gradient-to-r ${service.gradient} rounded-lg sm:rounded-xl text-white text-lg sm:text-xl lg:text-2xl`}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <BiCodeBlock className="text-emerald-400 text-sm sm:text-base" />
                        <span className="text-slate-400 font-mono text-xs sm:text-sm">
                          {/* console.log("Specialization Active"); */}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: service.delay + 0.2 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: service.delay + 0.4 }}
                    className="space-y-2 sm:space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <FaRocket className="text-emerald-400 text-sm sm:text-base" />
                      <span className="text-slate-400 font-mono text-xs sm:text-sm">Tech Stack:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {service.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: service.delay + 0.5 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r ${service.gradient} bg-opacity-20 text-white text-xs sm:text-sm rounded-full border border-white/10 hover:border-white/30 transition-colors duration-300 font-medium`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Lottie Animation */}
                <div className="lg:col-span-1 flex justify-center lg:justify-end">
                  <motion.div
                    animate={floatingAnimation}
                    style={{ animationDelay: `${index * 0.5}s` }}
                    className="w-48 sm:w-56 lg:w-64 xl:w-72 max-w-full"
                  >
                    <Lottie
                      animationData={service.lottie}
                      loop={true}
                      className="w-full h-auto filter drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20`}
                style={{
                  background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6"
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              🚀
            </motion.div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Let&apos;s collaborate and bring your ideas to life with modern web technologies
            </p>
            <motion.div
              className="mt-4 sm:mt-6 font-mono text-emerald-400 text-xs sm:text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* // Ready when you are... */}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
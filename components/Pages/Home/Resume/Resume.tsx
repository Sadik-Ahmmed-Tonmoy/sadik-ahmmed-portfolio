/* eslint-disable react/prop-types */
"use client";

import { motion, useInView, Variants, TargetAndTransition } from "framer-motion";
import React, { useEffect, useState, useMemo } from "react";
import { BsCodeSlash, BsCursorFill } from "react-icons/bs";
import { FaCode, FaGithub, FaLaptopCode, FaReact, FaTerminal, FaUserGraduate } from "react-icons/fa";
import { MdCode, MdDownload, MdOutlineBusinessCenter, MdSchool, MdWork } from "react-icons/md";
import { SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostman, SiPrisma } from "react-icons/si";
import Link from "next/link";

// Type definitions
interface TimelineItemType {
  id: number;
  type: "education" | "training" | "work";
  date: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
  techStack: string[];
}

interface SkillCategory {
  category: string;
  techs: string[];
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  cardVariants: Variants;
}

interface TechStackBadgeProps {
  tech: string;
  index: number;
}

interface CodeBlockProps {
  children: React.ReactNode;
  delay?: number;
}

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
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const timelineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 300,
    },
  },
};

const floatingVariants: Variants = {
  animate: (custom: number) => ({
    y: [0, -10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
      delay: custom * 0.5,
    },
  }),
};

const Resume: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const fullText: string = "const developer = { name: 'Sadik Ahmmed Tonmoy', status: 'Available for hire' };";

  // Generate random positions once on mount
  const [floatingSymbols] = useState(() => {
    return [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      symbol: ["<>", "{}", "[]", "()", "/>", "&&", "||", "=>"][Math.floor(Math.random() * 8)],
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  });

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1CGcwkC6XkUDbMHJCjEjXk6_1OttBIQbS/view?usp=sharing";
    link.download = "Sadik_Ahmmed_Tonmoy_Resume.pdf";
    link.target = "_blank";
    link.click();
  };

  const timelineData: TimelineItemType[] = [
    {
      id: 1,
      type: "education",
      date: "2018 - 2022",
      title: "Bachelor of Business Administration (BBA)",
      subtitle: "Stamford University Bangladesh",
      description: "Specialization in Marketing with strong academic performance",
      details: ["Specialization: Marketing", "Academic Achievement: CGPA 3.46"],
      icon: <FaUserGraduate className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-600",
      techStack: ["Marketing", "Business Analysis", "Strategic Planning"],
    },
    {
      id: 2,
      type: "training",
      date: "Dec 2022 - Present",
      title: "Full Stack Developer Training",
      subtitle: "Programming Hero",
      description: "Comprehensive full-stack development training program",
      details: ["Creative Responsive Design", "User Experience Focus", "Visual Design", "Clean Code Practices"],
      icon: <BsCodeSlash className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-600",
      techStack: [ 
          "JavaScript",  "Tailwind CSS",  "Next.js",        "React",
         "Node.js", "Express.js", "MongoDB", "Prisma", " Mongoose",
         "RESTful APIs", "Git", "GitHub", "Agile Methodologies",
 ],
    },
    {
      id: 3,
      type: "work",
      date: "Aug 2023 - Sep 2024",
      title: "React Developer",
      subtitle: "Wizard Software & Technology Bangladesh Ltd",
      description: "Developed dynamic and responsive web applications while collaborating with senior developers",
      details: ["Front-end & Back-end Development", "Team Collaboration", "Responsive Web Applications"],
      icon: <FaReact className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-600",
      techStack: ["React", "JavaScript", "HTML", "CSS", "Git", "GitHub", ],
    },
    {
      id: 4,
      type: "work",
      date: "Oct 2024 - Present",
      title: "Full Stack Developer",
      subtitle: "SM Technology",
      description: "Currently developing and maintaining high-performance web applications",
      details: ["Full Stack Development", "Web Application Maintenance", "Performance Optimization"],
      icon: <FaLaptopCode className="w-5 h-5" />,
      color: "from-orange-500 to-red-600",
      techStack:  [
        "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Next.js", "Prisma",
        "RESTful APIs", "Git", "GitHub", "Agile Methodologies",
      ],
    },
  ];

  const skills: SkillCategory[] = [
    { category: "Frontend", techs: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Redux ", "RTK Query"] },
    { category: "Backend", techs: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "Mongoose", "RESTful APIs"] },
    { category: "Tools", techs: ["Git", "GitHub", "Docker", "AWS", "Figma", "Postman", "VS Code"] },
    { category: "Soft Skills", techs: ["Leadership", "Team Collaboration", "Problem Solving", "Communication"] }
  ];

  const CodeBlock: React.FC<CodeBlockProps> = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-slate-900/80 border border-emerald-500/30 rounded-lg p-4 font-mono text-sm"
    >
      {children}
    </motion.div>
  );

  return (
    <div id="resume" className="min-h-screen bg-gradient-to-br relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Symbols */}
        {floatingSymbols.map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-500/10 text-2xl font-mono"
            style={{
              left: `${symbol.left}%`,
              top: `${symbol.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: symbol.duration,
              repeat: Infinity,
              delay: symbol.delay,
            }}
          >
            {symbol.symbol}
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Terminal Header */}
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-8">
              <div className="bg-slate-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-t-lg p-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <FaTerminal className="text-emerald-400 text-sm" />
                  <span className="text-slate-400 text-sm font-mono">~/portfolio/resume</span>
                </div>
              </div>
              <div className="bg-slate-950/90 backdrop-blur-sm border-x border-b border-emerald-500/30 rounded-b-lg p-6 text-left">
                <div className="font-mono text-emerald-400">
                  <span className="text-purple-400">$</span> node about-me.js
                  <br />
                  <motion.span className="text-cyan-300" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                    {typedText}
                    <BsCursorFill className="inline ml-1 text-emerald-400" />
                  </motion.span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-full py-3 px-6 mb-8 shadow-lg"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                <MdCode className="text-2xl text-emerald-400" />
              </motion.div>
              <span className="text-white font-semibold tracking-wider">DEVELOPER.RESUME</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <motion.span
                className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                Code
              </motion.span>
              <span className="text-white mx-4">
                <motion.span
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  &amp;
                </motion.span>
              </span>
              <motion.span
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              >
                Career
              </motion.span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: <SiJavascript />, color: "text-yellow-400" },
                { icon: <SiNextdotjs />, color: "text-gray-400" },
                { icon: <FaReact />, color: "text-blue-500" },
                { icon: <FaLaptopCode />, color: "text-purple-500" },
                { icon: <FaTerminal />, color: "text-green-500" },
                { icon: <BsCodeSlash />, color: "text-cyan-400" },
                { icon: <MdOutlineBusinessCenter />, color: "text-orange-400" },
                { icon: <SiPostman />, color: "text-red-400" },
                { icon: <SiPrisma />, color: "text-blue-300" },
                { icon: <SiNodedotjs />, color: "text-green-400" },
                { icon: <SiMongodb />, color: "text-green-500" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`text-3xl ${tech.color}`}
                  custom={index}
                  variants={floatingVariants}
                  animate="animate"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              variants={itemVariants}
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-emerald-500/25 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative flex items-center gap-3">
                <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <MdDownload className="text-xl" />
                </motion.div>
                <span>Download Resume</span>
              </div>
            </motion.button>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Skills &amp; Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillCategory, index) => (
                <SkillCard key={skillCategory.category} category={skillCategory} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <div className="relative max-w-5xl mx-auto">
            {/* Animated Timeline Line */}
            <motion.div
              className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-500 rounded-full shadow-lg origin-top"
              variants={timelineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} cardVariants={cardVariants} />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 shadow-2xl">
              <CodeBlock delay={2.5}>
                <span className="text-purple-400">if</span>
                <span className="text-white"> (</span>
                <span className="text-cyan-300">interested</span>
                <span className="text-white">) {"{"}</span>
                <br />
                <span className="ml-4 text-emerald-400">console.log</span>
                <span className="text-white">(</span>
                <span className="text-yellow-300">&quot;Let&apos;s collaborate!&quot;</span>
                <span className="text-white">);</span>
                <br />
                <span className="text-white">{"}"}</span>
              </CodeBlock>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Link href="https://github.com/Sadik-Ahmmed-Tonmoy" className="inline-block" target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-full hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300"
                  >
                    <FaGithub className="inline mr-2" />
                    GitHub Profile
                  </motion.button>
                </Link>
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <MdDownload className="inline mr-2" />
                  Full Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Timeline Item Component
const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, cardVariants }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ delay: index * 0.2 }}
    >
      {/* Timeline Icon */}
      <motion.div
        className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg z-10 ring-4 ring-slate-900`}
        whileHover={{ scale: 1.2, rotate: 180 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {item.icon}
      </motion.div>

      {/* Content Card */}
      <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
        <motion.div
          className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
        >
          {/* Animated Background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl`}
            transition={{ duration: 0.3 }}
          />

          {/* Date Badge */}
          <motion.div
            className={`inline-block bg-gradient-to-r ${item.color} text-white text-sm font-semibold py-2 px-4 rounded-full mb-4 shadow-lg`}
            whileHover={{ scale: 1.05 }}
          >
            {item.date}
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <motion.h3
              className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300"
              layoutId={`title-${item.id}`}
            >
              {item.title}
            </motion.h3>
            <motion.h4 className="text-xl font-semibold text-emerald-400 mb-4" layoutId={`subtitle-${item.id}`}>
              {item.subtitle}
            </motion.h4>
            <motion.p className="text-slate-300 mb-6 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              {item.description}
            </motion.p>

            {/* Details List */}
            <motion.div className="space-y-2 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              {item.details.map((detail, detailIndex) => (
                <motion.div
                  key={detailIndex}
                  className="flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + detailIndex * 0.1 }}
                >
                  <motion.div
                    className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full shadow-sm`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: detailIndex * 0.2 }}
                  />
                  <span className="text-slate-400 text-sm">{detail}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <div className="mt-4">
              <p className="text-xs text-slate-500 mb-2 font-mono">Tech Stack</p>
              <div className="flex flex-wrap">
                {item.techStack.map((tech, techIndex) => (
                  <TechStackBadge key={tech} tech={tech} index={techIndex} />
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {item.type === "education" && <MdSchool className="w-8 h-8 text-white" />}
            {item.type === "work" && <MdWork className="w-8 h-8 text-white" />}
            {item.type === "training" && <FaCode className="w-8 h-8 text-white" />}
          </motion.div>
        </motion.div>
      </div>

      {/* Spacer for desktop */}
      <div className="hidden md:block flex-1"></div>
    </motion.div>
  );
};

const TechStackBadge: React.FC<TechStackBadgeProps> = ({ tech, index }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1, type: "spring" }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="inline-block bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 rounded-full px-3 py-1 text-xs text-emerald-300 mr-2 mb-2 backdrop-blur-sm"
  >
    {tech}
  </motion.span>
);

// Skills Card Component
const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300"
    whileHover={{ scale: 1.02, y: -5 }}
  >
    <h3 className="text-lg font-semibold text-emerald-400 mb-4">{category.category}</h3>
    <div className="flex flex-wrap gap-2">
      {category.techs.map((tech) => (
        <span
          key={tech}
          className="bg-emerald-500/20 text-emerald-300 text-xs px-2 py-1 rounded border border-emerald-500/30"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default Resume;
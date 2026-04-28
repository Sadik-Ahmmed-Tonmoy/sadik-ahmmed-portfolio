"use client";

import { motion, useInView, Variants, TargetAndTransition } from "framer-motion";
import { useRef, useState } from "react";
import { FaCode, FaExternalLinkAlt, FaGithub, FaTerminal } from "react-icons/fa";
import { HiOutlineFolder } from "react-icons/hi";
import { MdRocketLaunch } from "react-icons/md";
import { SiExpress, SiFramer, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import Image, { StaticImageData } from "next/image";
import kmrImage from "@/assets/Image/knockMyRide.png";
import perfectoImage from "@/assets/Image/perfecto.png";
import ourLoveJourney from "@/assets/Image/Our Love Journey.png";
import primelyGaming from "@/assets/Image/game logo.jpeg";
import { Link } from "react-scroll";

interface Tech {
  icon: React.ReactNode;
  name: string;
  color: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  github: string;
  tech: Tech[];
  category: string;
  featured: boolean;
  status: string;
}

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects: Project[] = [
    {
      id: 1,
      name: "KnockMyRide",
      description:
        "A modern ride-based platform focused on vehicle services and user interaction. Features scalable architecture, smooth UI/UX, and optimized performance for real-world usage.",
      image: kmrImage,
      link: "https://knockmyride.com",
      github: "#",
      tech: [
        { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
        { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-400" },
      ],
      category: "Platform",
      featured: true,
      status: "Live",
    },
    {
      id: 2,
      name: "Perfecto",
      description:
        "A full-featured e-commerce platform with secure payment integration, product management, and admin dashboard. Built for performance, scalability, and real-time inventory handling.",
      image: perfectoImage,
      link: "https://perfectobd.com/",
      github: "#",
      tech: [
        { icon: <SiReact />, name: "React", color: "text-blue-400" },
        { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
        { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
      ],
      category: "E-commerce",
      featured: true,
      status: "Live",
    },
    {
      id: 3,
      name: "Reception Ceremony",
      description:
        "A beautifully designed event website showcasing a wedding reception with elegant UI, responsive layout, and smooth animations for a premium user experience.",
      image: ourLoveJourney,
      link: "https://sadik-and-shailee-reception-ceremon.vercel.app",
      github: "#",
      tech: [
        { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
        { icon: <SiFramer />, name: "Framer Motion", color: "text-pink-400" },
      ],
      category: "Event Website",
      featured: false,
      status: "Live",
    },
    {
      id: 4,
      name: "Primely Gaming",
      description:
        "A gaming platform with authentication, game management, leaderboards, and social features. Includes real-time interaction and a dynamic user experience.",
      image: primelyGaming,
      link: "https://primely-gaming-client.vercel.app/",
      github: "#",
      tech: [
        { icon: <SiReact />, name: "React", color: "text-blue-400" },
        { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
      ],
      category: "Gaming Platform",
      featured: false,
      status: "Live",
    },
  ];

  // Professional animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const hoverVariants: TargetAndTransition = {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  };

  const imageVariants: TargetAndTransition = {
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  const buttonHoverVariants: TargetAndTransition = {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  };

  const buttonTapVariants: TargetAndTransition = {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  };

  return (
    <section ref={ref} id="portfolio" className="relative min-h-screen overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Professional Header */}
          <motion.div variants={headerVariants} className="text-center mb-16 sm:mb-20 lg:mb-24">
            {/* Terminal Window */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
              <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-t-xl p-3 sm:p-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <FaTerminal className="text-emerald-400 text-sm" />
                  <span className="text-slate-400 text-sm font-mono">~/portfolio/projects</span>
                </div>
              </div>
              <div className="bg-slate-950/95 backdrop-blur-xl border-x border-b border-slate-700/50 rounded-b-xl p-6 sm:p-8 text-left">
                <div className="font-mono text-sm sm:text-base">
                  <div className="text-slate-500 mb-2"> Portfolio initialization</div>
                  <div>
                    <span className="text-purple-400">const</span>
                    <span className="text-slate-200"> portfolio = </span>
                    <span className="text-cyan-400">new</span>
                    <span className="text-yellow-400"> ProjectShowcase</span>
                    <span className="text-slate-200">();</span>
                  </div>
                  <div>
                    <span className="text-slate-200">portfolio.</span>
                    <span className="text-green-400">displayFeaturedWork</span>
                    <span className="text-slate-200">();</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-full py-3 px-6 mb-8 sm:mb-10"
            >
              <HiOutlineFolder className="text-xl text-emerald-400" />
              <span className="text-slate-200 font-medium tracking-wide">SELECTED WORKS</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-100 mb-6"
            >
              Featured
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              A curated collection of my recent work, showcasing modern web applications built with cutting-edge technologies and best practices.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={hoverVariants}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/5 transition-shadow duration-500"
              >
                {/* Status & Featured Badge */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-600/50 text-slate-300 text-xs px-3 py-1.5 rounded-full font-medium">
                    {project.category}
                  </div>
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5"
                    >
                      <MdRocketLaunch className="text-xs" />
                      Featured
                    </motion.div>
                  )}
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-sm border border-slate-600/50 text-xs px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-slate-300 font-medium">{project.status}</span>
                  </div>
                </div>

                {/* Project Image */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live`}
                >
                  <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                    {typeof project.image === "string" ? (
                      <motion.img src={project.image} alt={project.name} className="w-full h-full object-cover" whileHover={imageVariants} />
                    ) : (
                      <motion.div whileHover={imageVariants} className="relative w-full h-full">
                        <Image src={project.image} alt={project.name} fill className="object-cover" />
                      </motion.div>
                    )}

                    {/* Overlay */}
                    <motion.div
                      initial="hidden"
                      whileHover="hover"
                      variants={overlayVariants}
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/10 to-transparent flex items-center justify-center"
                    >
                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={buttonHoverVariants}
                          whileTap={buttonTapVariants}
                          className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl transition-colors duration-300"
                          aria-label={`View ${project.name} live`}
                        >
                          <FaExternalLinkAlt className="text-lg" />
                        </motion.a>
                        {/* <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={buttonHoverVariants}
                        whileTap={buttonTapVariants}
                        className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-full shadow-xl transition-colors duration-300"
                        aria-label={`View ${project.name} source code`}
                      >
                        <FaGithub className="text-lg" />
                      </motion.a> */}
                      </div>
                    </motion.div>
                  </div>
                </motion.a>
                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300"
                      animate={hoveredProject === project.id ? { scale: 1.02 } : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.name}
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      animate={hoveredProject === project.id ? { rotate: 15 } : { rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-emerald-400 text-xl mt-1"
                    >
                      <FaCode />
                    </motion.a>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6 text-base sm:text-lg">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-slate-300 uppercase tracking-wider">Technology Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-2 bg-slate-800/50 border border-slate-600/30 rounded-lg px-3 py-2 text-sm"
                        >
                          <span className={`${tech.color} text-base`}>{tech.icon}</span>
                          <span className="text-slate-300 font-medium">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700/50">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={buttonHoverVariants}
                      whileTap={buttonTapVariants}
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </motion.a>

                    <div className="text-slate-500 text-sm font-mono">0{index + 1}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-20 sm:mt-24 lg:mt-32"
          >
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl sm:text-6xl lg:text-7xl mb-6"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4">Let&apos;s Build Something Great</h3>
              <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? I&apos;m always interested in discussing new opportunities and bringing innovative ideas to life.
              </p>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                // className="flex items-center justify-center p-3 rounded-full bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all"
              >
                <motion.button
                  whileHover={buttonHoverVariants}
                  whileTap={buttonTapVariants}
                  className="bg-gradient-to-r cursor-pointer from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-shadow duration-300"
                >
                  Start a Conversation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

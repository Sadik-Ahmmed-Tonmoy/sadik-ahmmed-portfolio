"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaRocket, FaChevronUp } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import About from "../About/About";
import Contact from "../Contact/Contact";
import HomeTitle from "../HomeTitle/HomeTitle";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import { Link } from "react-scroll";

// Initialize AOS
if (typeof window !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });
}

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 500px
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      
      // Calculate scroll progress for circular progress indicator
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Refresh AOS when components are loaded
    AOS.refresh();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-5 md:mt-20 container mx-auto overflow-hidden relative">
      <HomeTitle />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Portfolio />
      {/* <Pricing/> */}
      <Contact />

      {/* Scroll to Top Button with Progress Indicator */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block fixed bottom-5 right-5 z-50"
          >
            {/* Circular Progress Indicator */}
            <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="rgba(16, 185, 129, 0.2)"
                strokeWidth="4"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
                className="transition-all duration-300"
              />
            </svg>
            
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth="easeInOutQuart"
              offset={-50}
              duration={800}
              className="cursor-pointer block relative"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 rounded-full text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 group"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* You can change the icon here */}
                  <FaArrowUp className="w-5 h-5" />
                  {/* Alternative icons: */}
                  {/* <FaRocket className="w-5 h-5" /> */}
                  {/* <MdKeyboardDoubleArrowUp className="w-5 h-5" /> */}
                  {/* <FaChevronUp className="w-5 h-5" /> */}
                </motion.div>
                
                {/* Tooltip on hover */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  Back to Top
                </span>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
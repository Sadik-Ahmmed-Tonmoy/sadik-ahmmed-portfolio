"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaRegUser } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import DP from "@/assets/Image/DP.jpg";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton/ScrollButton";

const NameCard = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
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

  const floatingAnimation: TargetAndTransition = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="lg:h-screen lg:sticky top-0 left-0 lg:w-4/12 xl:w-3/12 flex items-center p-4">
      <motion.div
        id="nameCard"
        className="w-full bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 shadow-2xl overflow-hidden relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-500/30"
          >
            <Image
              className="w-full h-full object-cover"
              src={DP}
              alt="Sadik Ahmmed"
              width={192}
              height={192}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h3 className="text-3xl font-bold text-white mb-2">
            Sadik Ahmmed Tonmoy
          </h3>
          <div className="text-emerald-400 font-mono text-lg h-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center items-center gap-2"
            >
              <BsCodeSlash />
              <span className="font-semibold text-sm md:text-base">
                <Typewriter
                  options={{
                    strings: [
                      "(WEB DEVELOPER)",
                      "(FULL STACK DEVELOPER)",
                      "(MERN STACK DEVELOPER)",
                      "(REACT DEVELOPER)",
                      "(NEXT-JS DEVELOPER)",
                      "(FRONT-END DEVELOPER)",
                      "(PRISMA DEVELOPER)",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 85,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <motion.div
              animate={floatingAnimation}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-2 rounded-full text-white"
            >
              <MdEmail className="text-xl" />
            </motion.div>
            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <a
                href="mailto:workwithsadik@gmail.com"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                workwithsadik@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.div
              animate={floatingAnimation}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full text-white"
            >
              <MdLocationOn className="text-xl" />
            </motion.div>
            <div>
              <p className="text-slate-400 text-sm">Location</p>
              <p className="text-white">Khilgaon, Dhaka, Bangladesh</p>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mb-8"
        >
          <motion.a
            href="https://www.linkedin.com/in/sadikahmmedtonmoy/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-blue-500/50 p-3 rounded-full text-white transition-all"
          >
            <FaLinkedin className="text-xl" />
          </motion.a>

          <motion.a
            href="https://github.com/Sadik-Ahmmed-Tonmoy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-gray-500/50 p-3 rounded-full text-white transition-all"
          >
            <FaGithub className="text-xl" />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/sadikahmedtonmoy/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-blue-600/50 p-3 rounded-full text-white transition-all"
          >
            <FaFacebook className="text-xl" />
          </motion.a>
        </motion.div>

        {/* Hire Me Button */}
        <motion.div variants={itemVariants}>
          <ScrollButton to="contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaRegUser className="text-lg" />
              <span>HIRE ME</span>
            </motion.button>
          </ScrollButton>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-6 pt-4 border-t border-emerald-500/20 text-center"
        >
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sadik Ahmmed. All Rights Reserved
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NameCard;
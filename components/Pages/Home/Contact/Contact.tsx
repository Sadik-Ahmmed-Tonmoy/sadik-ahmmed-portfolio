"use client";

import emailjs from "@emailjs/browser";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import { useRef } from "react";
import { BsCursorFill, BsWhatsapp } from "react-icons/bs";
import { FaCode, FaGithub, FaLinkedin, FaPhone, FaUser } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdOutlineWork } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import Swal from "sweetalert2";

interface FloatingElement {
  left: number;
  top: number;
  symbol: string;
  duration: number;
  delay: number;
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  // Initialize with deterministic values using lazy initialization
  const floatingElements: FloatingElement[] = Array.from({ length: 15 }, (_, i) => ({
    left: (i * 13) % 97 + 1,        // Deterministic distribution 1-98
    top: (i * 27) % 95 + 2,          // Deterministic distribution 2-97
    symbol: ["<>", "{}", "[]", "()", "/>", "&&", "||", "=>"][i % 8],
    duration: 5 + (i % 5),           // 5 to 9
    delay: (i % 5) * 0.4,            // 0 to 1.6
  }));

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm("service_4usagwu", "template_4umhevi", form.current, "pNvdMDn6XbbkWiHBM").then(
      (result) => {
        if (result.text) {
          Swal.fire({
            title: `Thank you for your message!`,
            text: "I'll get back to you soon. For urgent matters, contact me on WhatsApp at +8801679170892",
            width: 600,
            padding: "3em",
            color: "#10b981",
            background: "#0f172a",
            backdrop: `
              rgba(16,185,129,0.1)
              left top
              no-repeat
            `,
          });
          form.current?.reset();
        }
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

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
    <div id="contact" className="min-h-screen relative overflow-hidden bg-gradient-to-br py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Symbols */}
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-500/10 text-2xl font-mono"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-full py-3 px-6 mb-8 shadow-lg"
          >
            <motion.div
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <MdEmail className="text-2xl text-emerald-400" />
            </motion.div>
            <span className="text-white font-semibold tracking-wider">CONTACT.ME</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <motion.span
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Let&apos;s Work
            </motion.span>
            <span className="text-white mx-4">Together</span>
            <motion.span className="inline-block text-emerald-400" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              !
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out - I&apos;m always open to new collaborations and
            interesting challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 shadow-2xl"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-emerald-400 mb-6">
              Send me a message
              <BsCursorFill className="inline ml-2 animate-pulse" />
            </motion.h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <motion.div variants={itemVariants} className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300 flex items-center gap-2">
                    <FaUser className="text-emerald-400" /> FULL NAME
                  </span>
                </label>
                <input
                  required
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  className="input bg-slate-900/50 border-0 border-b border-emerald-500/30 rounded-none px-0 focus:outline-none focus:border-emerald-400 text-white w-full"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300 flex items-center gap-2">
                    <MdEmail className="text-emerald-400" /> EMAIL
                  </span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="input bg-slate-900/50 border-0 border-b border-emerald-500/30 rounded-none px-0 focus:outline-none focus:border-emerald-400 text-white w-full"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300 flex items-center gap-2">
                    <FaPhone className="text-emerald-400" /> PHONE (OPTIONAL)
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+880 1234 567890"
                  className="input bg-slate-900/50 border-0 border-b border-emerald-500/30 rounded-none px-0 focus:outline-none focus:border-emerald-400 text-white w-full"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300 flex items-center gap-2">
                    <MdOutlineWork className="text-emerald-400" /> PROJECT TYPE
                  </span>
                </label>
                <input
                  name="budget"
                  placeholder="What kind of project are we talking about?"
                  className="input bg-slate-900/50 border-0 border-b border-emerald-500/30 rounded-none px-0 focus:outline-none focus:border-emerald-400 text-white w-full"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300 flex items-center gap-2">
                    <FaCode className="text-emerald-400" /> MESSAGE
                  </span>
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="textarea bg-slate-900/50 border-0 border-b border-emerald-500/30 rounded-none px-0 focus:outline-none focus:border-emerald-400 text-white w-full"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      <MdEmail className="text-xl" />
                    </motion.div>
                    <span>SEND MESSAGE</span>
                  </div>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={floatingAnimation}
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 rounded-full text-white"
                  >
                    <SiGmail className="text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-slate-400 font-medium">Email</h4>
                    <a href="mailto:workwithsadik@gmail.com" className="text-white hover:text-emerald-400 transition-colors text-lg font-semibold">
                      workwithsadik@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <motion.div
                    animate={floatingAnimation}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full text-white"
                  >
                    <BsWhatsapp className="text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-slate-400 font-medium">WhatsApp</h4>
                    <a
                      href="https://wa.me/8801679170892"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 transition-colors text-lg font-semibold"
                    >
                      +880 1679 170892
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <motion.div
                    animate={floatingAnimation}
                    transition={{ delay: 1 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full text-white"
                  >
                    <MdLocationOn className="text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-slate-400 font-medium">Location</h4>
                    <p className="text-white text-lg font-semibold">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-500/20">
                <h4 className="text-slate-400 font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/Sadik-Ahmmed-Tonmoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-emerald-500/50 p-3 rounded-full text-white transition-all"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/sadikahmmedtonmoy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-blue-500/50 p-3 rounded-full text-white transition-all"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">Current Availability</h3>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full opacity-75 animate-ping"></div>
                  <div className="relative w-4 h-4 bg-emerald-500 rounded-full"></div>
                </div>
                <p className="text-white text-lg font-medium">Available for new projects</p>
              </div>
              <p className="text-slate-400 mt-4">
                I&apos;m currently accepting new freelance clients and interesting project opportunities. Get in touch and let&apos;s discuss how I can help
                bring your ideas to life!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
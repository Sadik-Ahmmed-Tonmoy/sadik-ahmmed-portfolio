"use client";

import { motion, Variants } from "framer-motion";
import {
  AiOutlineDatabase,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import { BsCodeSlash, BsFillPersonLinesFill } from "react-icons/bs";
import {
  MdOutlineBusinessCenter
} from "react-icons/md";
import { VscVmConnect } from "react-icons/vsc";
import { Link } from "react-scroll";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface NavItem {
  id: string;
  icon: React.ReactNode;
  tooltip: string;
}

const Sidebar = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1,
      color: "#10b981",
      transition: { duration: 0.2 },
    },
  };

  const navItems: NavItem[] = [
    { id: "home", icon: <AiOutlineHome />, tooltip: "Home" },
    { id: "about", icon: <BsFillPersonLinesFill />, tooltip: "About" },
    { id: "resume", icon: <MdOutlineBusinessCenter />, tooltip: "Resume" },
    { id: "services", icon: <VscVmConnect />, tooltip: "Services" },
    { id: "skills", icon: <BsCodeSlash />, tooltip: "Skills" },
    { id: "portfolio", icon: <AiOutlineDatabase />, tooltip: "Portfolio" },
    { id: "contact", icon: <AiOutlineMail />, tooltip: "Contact" },
  ];

  return (
    <motion.div
      className="hidden lg:w-1/12 lg:h-screen sticky top-0 right-0 lg:flex items-center justify-end"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-40">
        <motion.label
          htmlFor="sidebar-toggle"
          className="btn btn-ghost p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* <FaBars className="text-xl text-emerald-400" /> */}
        </motion.label>
      </div>

      {/* Mobile Menu */}
      <input type="checkbox" id="sidebar-toggle" className="peer hidden" />
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-30 transition-opacity opacity-0 peer-checked:opacity-100 pointer-events-none peer-checked:pointer-events-auto md:hidden"></div>
      
      <motion.div
        className="w-16 h-auto bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-l-xl p-4 shadow-2xl flex flex-col items-center gap-6 mr-0 transform translate-x-full peer-checked:translate-x-0 md:translate-x-0 transition-transform duration-300 z-30"
        layout
      >
        {/* Desktop Navigation */}
        <motion.ul
          className="menu flex flex-col gap-6"
          variants={containerVariants}
        >
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              whileHover="hover"
              data-tooltip-id={item.id}
              className="tooltip-left"
            >
              <Link
                activeClass="active"
                to={item.id}
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                className="flex items-center justify-center p-3 rounded-full bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all"
              >
                <span className="text-xl">{item.icon}</span>
              </Link>
              <ReactTooltip
                id={item.id}
                place="left"
                variant="dark"
                className="!bg-slate-800 !text-emerald-400 !border !border-emerald-500/30 !rounded-lg !py-1 !px-2"
              >
                {item.tooltip}
              </ReactTooltip>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
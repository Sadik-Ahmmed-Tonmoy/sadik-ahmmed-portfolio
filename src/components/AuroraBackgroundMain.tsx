"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import hi_image from '../assets/hi_img.png'

export function AuroraBackgroundMain() {
  const controls = useAnimation();
  useEffect(() => {
    const upDown = async () => {
      while (true) {
        await controls.start({ y: -20, transition: { duration: 1 } });
        await controls.start({ y: 20, transition: { duration: 1 } });
      }
    };

    upDown();

    return () => controls.stop();
  }, [controls]);

  return (
    <AuroraBackground>
      <div className=" relative">
   {/* <h1 className="text-[150px] text-[#362458] text-center absolute inset-0 londrina-outline-regular">HI</h1> */}
      </div>
      <motion.div
      animate={controls}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <h1 className="text-[150px] text-[#362458] text-center absolute inset-0 londrina-outline-regular">
        HI
      </h1>
    </motion.div>
    </AuroraBackground>
  );
}

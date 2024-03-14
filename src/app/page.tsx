"use client";
import { HeroParallaxParent } from "@/components/HeroParallaxParent";
import { StickyScrollRevealParent } from "@/components/StickyScrollRevealParent";
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";
import Image from "next/image";
import { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <div className={`relative ${isDark && "dark"}`}>
      <div className="absolute top-5 right-10 z-20 ">
        {isDark ? (
          <button
            className="hover:cursor-pointer"
            onClick={() => setIsDark(!isDark)}
          >
            <LuSun />
          </button>
        ) : (
          <button
            className="hover:cursor-pointer"
            onClick={() => setIsDark(!isDark)}
          >
            <IoMoon className="text-white" />
          </button>
        )}{" "}
      </div>
      <div className="">
        {/* <TextRevealCardPreview/> */}
        <StickyScrollRevealParent/>
        {/* <HeroParallaxParent /> */}
      </div>
    </div>
  );
}

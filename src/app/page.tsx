"use client";
import { BackgroundBeamsParent } from "@/components/BackgroundBeamsParent";
import { BgChangeOnScroll } from "@/components/BgChangeOnScroll";
import { CardHoverEffectParent } from "@/components/CardHoverEffectParent";
import { GlobeParent } from "@/components/GlobeParent";
import { HeroParallaxParent } from "@/components/HeroParallaxParent";
import { LampParent } from "@/components/LampParent";
import { MacbookScrollParent } from "@/components/MacbookScrollParent";
import { SVGMaskEffectParent } from "@/components/SVGMaskEffectParent";
import { SparklesPreviewParent } from "@/components/SparklesPreviewParent";
import { StickyScrollRevealParent } from "@/components/StickyScrollRevealParent";
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";
import { TracingBeamParent } from "@/components/TracingBeamParent";
import { WavyBackgroundParent } from "@/components/WavyBackgroundParent";
import Image from "next/image";
import { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const content = [
    <TextRevealCardPreview key={1}/>, 
    <HeroParallaxParent key={2}/> ,
    <BackgroundBeamsParent key={3}/>, 
    <MacbookScrollParent key={4}/>, 
    <SparklesPreviewParent key={5}/>, 
    <SVGMaskEffectParent key={6}/>, 
    <TracingBeamParent key={7}/>, 
    <WavyBackgroundParent key={8}/>, 
    <CardHoverEffectParent key={9}/>, 
    <GlobeParent key={10}/>, 
    <LampParent key={11}/>, 
  ];
  const BgColors = [
   
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-950)",
    "var(--slate-900)",
    "var(--black)",
  ];
  
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
        {/* <StickyScrollRevealParent/> */}
        <BgChangeOnScroll content={content} BgColors={BgColors}/>
      </div>
    </div>
  );
}

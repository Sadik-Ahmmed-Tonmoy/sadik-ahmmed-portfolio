"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import { HeroParallaxParent } from "./HeroParallaxParent";

const content = [
  <TextRevealCardPreview key={1}/>, 
  <HeroParallaxParent key={2}/> ,
  <TextRevealCardPreview key={3}/>, 
];

export function StickyScrollRevealParent() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}

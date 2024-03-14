"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import { HeroParallaxParent } from "./HeroParallaxParent";
import { BackgroundBeamsParent } from "./BackgroundBeamsParent";
import { MacbookScrollParent } from "./MacbookScrollParent";
import { SparklesPreviewParent } from "./SparklesPreviewParent";
import { SVGMaskEffectParent } from "./SVGMaskEffectParent";

const content = [
  <TextRevealCardPreview key={1}/>, 
  <HeroParallaxParent key={2}/> ,
  <BackgroundBeamsParent key={3}/>, 
  <MacbookScrollParent key={4}/>, 
  <SparklesPreviewParent key={5}/>, 
  <SVGMaskEffectParent key={6}/>, 
];

export function StickyScrollRevealParent() {
  return (
    <div className="overflow-hidden">
      <StickyScroll content={content} />
    </div>
  );
}

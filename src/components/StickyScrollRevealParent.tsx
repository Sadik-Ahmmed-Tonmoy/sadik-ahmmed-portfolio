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
import { TracingBeamParent } from "./TracingBeamParent";
import { WavyBackgroundParent } from "./WavyBackgroundParent";
import { CardHoverEffectParent } from "./CardHoverEffectParent";
import { GlobeParent } from "./GlobeParent";
import { LampParent } from "./LampParent";

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

export function StickyScrollRevealParent() {
  return (
    <div className="overflow-hidden">
      <StickyScroll content={content} />
    </div>
  );
}

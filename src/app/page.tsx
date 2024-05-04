import { AuroraBackgroundMain } from '@/components/AuroraBackgroundMain';
import { BackgroundBeamsMain } from '@/components/BackgroundBeamsMain';
import { BackgroundBoxesMain } from '@/components/BackgroundBoxesMain';
import { BackgroundGradientAnimationMain } from '@/components/BackgroundGradientAnimationMain';
import { BackgroundGradientMain } from '@/components/BackgroundGradientMain';
import { BentoGridThirdMain } from '@/components/BentoGridThirdMain';
import { CanvasRevealEffectMain } from '@/components/CanvasRevealEffectMain';
import { CardHoverEffectMain } from '@/components/CardHoverEffectMain';
import { DotBackgroundMain } from '@/components/DotBackgroundMain';
import { EvervaultCardMain } from '@/components/EvervaultCardMain';
import { HeroHighlightDemo } from '@/components/HeroHighlightDemo';
import { HeroParallaxParent } from '@/components/HeroParallaxParent';
import { HeroScrollDemo } from '@/components/HeroScrollDemo';
import { HoverBorderGradientDemo } from '@/components/HoverBorderGradientDemo';
import { LampDemo } from '@/components/LampDemo';
import { SVGMaskEffectDemo } from '@/components/SVGMaskEffectDemo';
import { SparklesPreview } from '@/components/SparklesPreview';
import { StickyScrollRevealDemo } from '@/components/StickyScrollRevealDemo';
import { TabsDemo } from '@/components/TabsDemo';
import { TextRevealCardPreview } from '@/components/TextRevealCardPreview';
import { TracingBeamDemo } from '@/components/TracingBeamDemo';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { HeroHighlight } from '@/components/ui/hero-highlight';

const HomePage = () => {
  return (
    <div className='bg-black relative'>
       {/* <HeroHighlight>
       <BentoGridThirdMain/>
       </HeroHighlight> */}
          {/* <div className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" /> */}
      <AuroraBackgroundMain/>
      <BackgroundBeams />
      <BackgroundBeamsMain/>
      <BackgroundBoxesMain/>
      <HeroParallaxParent/>
      <BackgroundGradientMain/>
      {/* <BentoGridThirdMain/> */}
      {/* <CanvasRevealEffectMain/> */}
      <CardHoverEffectMain/>
      <EvervaultCardMain/>
      {/* <BackgroundGradientAnimationMain/> */}
      <LampDemo/>
      <SparklesPreview/>
      <StickyScrollRevealDemo/>
      {/* <SVGMaskEffectDemo/> */}
      <TabsDemo/>
      <TextRevealCardPreview/>
      <TracingBeamDemo/>
      <HoverBorderGradientDemo/>
      <HeroScrollDemo/>

      {/* <GoogleGeminiEffectMain/> */}
      <HeroHighlightDemo/>
      <DotBackgroundMain/>
  
    </div>
  );
};

export default HomePage;
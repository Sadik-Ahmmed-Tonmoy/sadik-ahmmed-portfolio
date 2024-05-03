import { AuroraBackgroundMain } from '@/components/AuroraBackgroundMain';
import { BackgroundBeamsMain } from '@/components/BackgroundBeamsMain';
import { BackgroundBoxesMain } from '@/components/BackgroundBoxesMain';
import { BackgroundGradientAnimationMain } from '@/components/BackgroundGradientAnimationMain';
import { BackgroundGradientMain } from '@/components/BackgroundGradientMain';
import { CardHoverEffectMain } from '@/components/CardHoverEffectMain';
import { DotBackgroundMain } from '@/components/DotBackgroundMain';
import { EvervaultCardMain } from '@/components/EvervaultCardMain';
import { HeroHighlightDemo } from '@/components/HeroHighlightDemo';
import { HeroParallaxParent } from '@/components/HeroParallaxParent';
import { LampDemo } from '@/components/LampDemo';
import { SparklesPreview } from '@/components/SparklesPreview';
import { BackgroundBeams } from '@/components/ui/background-beams';

const HomePage = () => {
  return (
    <div className='bg-black'>
      <BackgroundBeams />
      <AuroraBackgroundMain/>
      <BackgroundBeamsMain/>
      <BackgroundBoxesMain/>
      <HeroParallaxParent/>
      <BackgroundGradientMain/>
      {/* <BentoGridThirdMain/> */}
      {/* <CanvasRevealEffectMain/> */}
      <CardHoverEffectMain/>
      <EvervaultCardMain/>
      <BackgroundGradientAnimationMain/>
      <LampDemo/>
      <SparklesPreview/>

      {/* <GoogleGeminiEffectMain/> */}
      <HeroHighlightDemo/>
      <DotBackgroundMain/>
  
    </div>
  );
};

export default HomePage;
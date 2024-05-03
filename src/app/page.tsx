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
import { GoogleGeminiEffectMain } from '@/components/GoogleGeminiEffectMain';
import { HeroParallaxParent } from '@/components/HeroParallaxParent';
import { BackgroundBeams } from '@/components/ui/background-beams';

const HomePage = () => {
  return (
    <div className='bg-black'>
      <BackgroundBeams />
      <HeroParallaxParent/>
      <AuroraBackgroundMain/>
      <BackgroundBeamsMain/>
      <BackgroundBoxesMain/>
      <BackgroundGradientMain/>
      {/* <BentoGridThirdMain/> */}
      <CanvasRevealEffectMain/>
      <CardHoverEffectMain/>
      <EvervaultCardMain/>
      <GoogleGeminiEffectMain/>
      <BackgroundGradientAnimationMain/>
      <DotBackgroundMain/>
  
    </div>
  );
};

export default HomePage;
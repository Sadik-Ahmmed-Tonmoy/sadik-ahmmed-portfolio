import { AuroraBackgroundMain } from '@/components/AuroraBackgroundMain';
import { BackgroundBeamsMain } from '@/components/BackgroundBeamsMain';
import { HeroParallaxParent } from '@/components/HeroParallaxParent';
import { BackgroundBeams } from '@/components/ui/background-beams';

const HomePage = () => {
  return (
    <div>
      <HeroParallaxParent/>
      <AuroraBackgroundMain/>
      <BackgroundBeamsMain/>
      <BackgroundBeams />
    </div>
  );
};

export default HomePage;
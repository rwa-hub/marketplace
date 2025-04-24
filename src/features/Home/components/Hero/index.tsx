import { useMediaQuery } from 'react-responsive';

import { DesktopHero } from "./HeroDesktop";
import { MobileHero } from "./HeroMobile";

export const Hero: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <DesktopHero /> : <MobileHero />;
};

import { useMediaQuery } from 'react-responsive';

import { DesktopGallery } from './DesktopGallery';
import { MobileGallery } from './MobileGalery';

export const Gallery: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <DesktopGallery /> : <MobileGallery />;
};

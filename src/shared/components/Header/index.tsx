import { useMediaQuery } from 'react-responsive';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

export const Header: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <DesktopHeader /> : <MobileHeader />;
};

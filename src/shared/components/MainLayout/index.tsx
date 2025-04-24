import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


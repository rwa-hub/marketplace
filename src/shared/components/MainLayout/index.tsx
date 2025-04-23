import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

export const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};


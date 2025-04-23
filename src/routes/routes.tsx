// src/routes/index.tsx
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import {MainLayout} from '@/shared/components/MainLayout';
import { NotFound } from '@/shared/components/NotFound';
import { Home } from '@/features/Home';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;

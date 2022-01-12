import { RouteObject, useRoutes } from 'react-router-dom';
import { useMemo } from 'react';
import routes from './routes';

function AppRoutes() {
  const renderRoutes = useMemo<RouteObject[]>(() => {
    return routes; // .filter((s) => s.path === '/home');
  }, []);
  return useRoutes(renderRoutes);
}

export default AppRoutes;

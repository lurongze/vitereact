import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/layout/layout';
import Login from '@/layout/login';
import Error404 from '@/layout/404';

import { lazy } from 'react';

function lazyLoad(path: string) {
  const LoadComponent = lazy(() => import(path));
  return <LoadComponent />;
}

let routes: RouteObject[] = [
  {
    path: '/', // 重定向首页
    element: <Navigate to="/home/index" />,
  },
  {
    path: '/login', // 登陆页
    element: <Login />,
  },
  {
    path: '/home', // 首页
    element: <Layout />,
    children: [
      {
        path: 'index', // 首页
        // element: <IndexPage />,
        element: lazyLoad('../pages/index'),
      },
      {
        path: 'user', // 用户信息
        element: lazyLoad('../pages/user'),
      },
      {
        path: '*', // 404页面
        element: <Error404 />,
      },
    ],
  },
  {
    path: '*', // 404页面
    element: <Error404 />,
  },
];

export default routes;

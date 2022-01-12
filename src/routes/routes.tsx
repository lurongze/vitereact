import { Navigate, RouteObject } from 'react-router-dom';
import Home from '@/layout/home';
import Login from '@/layout/login';
import Error404 from '@/layout/404';
import IndexPage from '@/pages/index';
import UserPage from '@/pages/user';
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
    element: <Home />,
    children: [
      {
        path: 'index', // 首页
        element: <IndexPage />,
      },
      {
        path: 'user', // 用户信息
        element: <UserPage />,
      },
    ],
  },
  {
    path: '*', // 404页面
    element: <Error404 />,
  },
];

export default routes;

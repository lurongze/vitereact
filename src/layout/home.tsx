import { Route, Routes, Link } from 'react-router-dom';
import IndexPage from '@/pages/index';
import UserPage from '@/pages/user';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="index">首页</Link>
      <Link to="user">用户信息</Link>
      <Routes>
        <Route path="/index" element={<IndexPage />} data-name="首页" />
        <Route path="/user" element={<UserPage />} data-name="用户信息" />
      </Routes>
    </div>
  );
}

export default Home;

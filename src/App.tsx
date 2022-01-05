import { Route, Routes } from 'react-router-dom';
import Home from '@/layout/home';
import Login from '@/layout/login';
import Error404 from '@/layout/404';

function App() {
  return (
    <Routes>
      <Route path="/home/*" element={<Home />} data-name="首页" />
      <Route path="/login" element={<Login />} data-name="登陆页" />
      <Route path="*" element={<Error404 />} data-name="404页面" />
    </Routes>
  );
}

export default App;

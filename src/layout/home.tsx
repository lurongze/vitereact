import { Route, Routes } from 'react-router-dom';
import { SiderMenu, Header, Content } from '@/layout/components';
import { Layout } from '@douyinfe/semi-ui';
import IndexPage from '@/pages/index';
import UserPage from '@/pages/user';

function Home() {
  return (
    <Layout style={{ height: '100vh', border: '1px solid var(--semi-color-border)' }}>
      <SiderMenu />
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route path="/index" element={<IndexPage />} data-name="首页" />
            <Route path="/user" element={<UserPage />} data-name="用户信息" />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;

import React, { ReactText, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Layout, Nav } from '@douyinfe/semi-ui';
import { IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';

function SiderMenu() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  console.log('params', params);
  console.log('loaction', location);
  const [selectedKeys, setSelectedKeys] = useState<ReactText[]>([]);

  useEffect(() => {
    if (!selectedKeys.length) {
      setSelectedKeys([location.pathname]);
    }
  }, [location]);

  return (
    <Layout.Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        // defaultSelectedKeys={['/index']}
        selectedKeys={selectedKeys}
        style={{ maxWidth: 220, height: '100%' }}
        // onSelect={handleClickItem}
        onSelect={({ itemKey, selectedKeys }: { itemKey: ReactText; selectedKeys: ReactText[] }) => {
          setSelectedKeys(selectedKeys);
          navigate(`${itemKey}`);
        }}
        items={[
          { itemKey: '/home/index', text: '首页', icon: <IconHome size="large" /> },
          { itemKey: '/home/xxx', text: '用户信息', icon: <IconHistogram size="large" /> },
          {
            itemKey: 'home',
            text: '测试功能',
            icon: <IconLive size="large" />,
            items: [{ itemKey: '/home/user', text: '测试功能sub', icon: <IconHome size="large" /> }],
          },
          { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
        ]}
        // header={{
        //   logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
        //   text: 'Semi 运营后台',
        // }}
        footer={{
          collapseButton: true,
        }}
      />
    </Layout.Sider>
  );
}

export default SiderMenu;

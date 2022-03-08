import React from 'react';

import ProLayout, { PageContainer, ProBreadcrumb } from '@ant-design/pro-layout';

const Bread = () => {
  return <ProBreadcrumb />;
};

function Layout(): JSX.Element {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        location={{
          pathname: '/admin/process/edit/123',
        }}
        title="中华人民共和国广东省国资委人才管理系统"
        navTheme="light"
        loading
        headerContentRender={Bread}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: '主页',
          },
          {
            path: '/',
            breadcrumbName: '测试页',
          },
          ...routers,
        ]}
        menuDataRender={() => [
          {
            path: '/welcome',
            name: '欢迎',
          },
          {
            path: '/admin',
            name: '管理',
            routes: [
              {
                name: '申请单列表',
                path: '/admin/process',
              },
              {
                name: '申请单详情',
                path: '/admin/process/detail/:id',
                hideInMenu: true,
              },
              {
                name: '编辑申请单',
                path: '/admin/process/edit/:id',
                hideInMenu: true,
              },
              {
                name: '添加申请单',
                path: '/admin/process/add',
                hideInMenu: true,
              },
            ],
          },
        ]}
      >
        <PageContainer content="欢迎使用" breadcrumbRender={false}>
          <div>Hello World</div>
        </PageContainer>
      </ProLayout>
    </div>
  );
}

export default Layout;

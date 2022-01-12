import { Breadcrumb } from '@douyinfe/semi-ui';

function BreadcrumbFC() {
  const routes: any = [];

  return routes.length ? (
    <Breadcrumb
      style={{
        marginBottom: '14px',
      }}
      routes={routes}
    />
  ) : null;
}

export default BreadcrumbFC;

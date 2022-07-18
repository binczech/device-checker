import { Layout } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, memo, PropsWithChildren } from 'react';

import { LoggedInUser } from '../logged-in-user';
import { Title } from '../title';

interface Props {
  fullWidth?: boolean;
}

const AppLayoutBase: FunctionComponent<PropsWithChildren<Props>> = ({ children, fullWidth }) => (
  <Layout>
    <Header>
      <div>
        <Title isSiteTitle text="Device Checker" />
        <LoggedInUser />
      </div>
      {children}
    </Header>
  </Layout>
);

export const AppLayout = memo(AppLayoutBase);

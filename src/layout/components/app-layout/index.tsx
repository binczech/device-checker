import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, memo, PropsWithChildren } from 'react';

import { LoggedInUser } from '../logged-in-user';
import { Title } from '../title';

import './styles.scss';

const AppLayoutBase: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Layout>
    <Header>
      <div>
        <Title isSiteTitle text="Device Checker" />
        <LoggedInUser />
      </div>
      <div className="content">
        <Content>
          {children}
        </Content>
      </div>
    </Header>
  </Layout>
);

export const AppLayout = memo(AppLayoutBase);

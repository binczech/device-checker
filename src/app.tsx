import React, { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { AppLayout } from 'layout';
import { UserPermissionGuard } from 'user/components';

import { OurRoutes } from './routes';

import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const queryClient = new QueryClient();

const App: FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <UserPermissionGuard>
        <AppLayout>
          <OurRoutes />
        </AppLayout>
      </UserPermissionGuard>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

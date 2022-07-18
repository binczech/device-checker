import React from 'react';
import { Route } from 'react-router-dom';

import { List } from './screens';

export const phoneRoutes = [
  (
    <Route
      key="phones"
      path="/phones"
      element={<List />}
    />
  ),
  (
    <Route
      key="default"
      path="*"
      element={<List />}
    />
  ),
];

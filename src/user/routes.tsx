import React from 'react';
import { Route } from 'react-router-dom';

import { Login } from './screens';

export const userRoutes = [
  (
    <Route
      key="login"
      path="/login"
      element={<Login />}
    />
  ),
];

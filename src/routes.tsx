import React, { FunctionComponent, memo } from 'react';
import { Routes } from 'react-router-dom';

import { phoneRoutes } from 'phone';
import { userRoutes } from 'user';

const OurRoutesBase: FunctionComponent = () => (
  <Routes>
    {userRoutes}
    {phoneRoutes}
  </Routes>
);

export const OurRoutes = memo(OurRoutesBase);

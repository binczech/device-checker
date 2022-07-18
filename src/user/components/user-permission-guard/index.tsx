import { isNull } from 'lodash/fp';
import React, {
  FunctionComponent, memo, PropsWithChildren, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { HOME_PATHNAME, LOGIN_PATHNAME } from 'consts';
import { AppLayout, Loader } from 'layout';
import { useGetUser } from 'user/model';
import { User } from 'user/types';

import { LoggedInUserProvider } from '../logged-in-user-provider';

const UserPermissionGuardBase: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const navigate = useNavigate();

  const isLoginScreen = window.location.pathname === LOGIN_PATHNAME;

  const [user, setUser] = useState<User | null>(null);
  const isUserLoggenIn = !isNull(user);

  useEffect(() => {
    if (!isUserLoggenIn && !isLoginScreen) {
      navigate(LOGIN_PATHNAME);
    }
    if (isUserLoggenIn && isLoginScreen) {
      navigate(HOME_PATHNAME);
    }
  }, [isLoginScreen, isUserLoggenIn, navigate]);

  const {
    data, isError, error, isLoading,
  } = useGetUser();

  useEffect(() => {
    setUser(data || null);
  }, [data]);

  if (isLoginScreen && isNull(user)) {
    return (
      <LoggedInUserProvider user={user} setUser={setUser}>
        {children}
      </LoggedInUserProvider>

    );
  }

  if (isLoading || !isUserLoggenIn) {
    return (
      <AppLayout>
        <Loader loading withoutChildren message="Loading user..." />
      </AppLayout>
    );
  }
  if (isError) {
    return (
      <div>{error.message}</div>
    );
  }
  return (
    <LoggedInUserProvider user={user} setUser={setUser}>
      {children}
    </LoggedInUserProvider>
  );
};

export const UserPermissionGuard = memo(UserPermissionGuardBase);

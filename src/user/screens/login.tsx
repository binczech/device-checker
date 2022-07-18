import React, {
  FunctionComponent, memo, useCallback, useContext,
} from 'react';

import { LoginForm } from 'user/components';
import { loginUser } from 'user/model/api';
import { Login as LoginType } from 'user/types';
import { LoggedInUserContext } from 'user/utils/logged-in-user-context';

const LoginBase: FunctionComponent = () => {
  const { setUser } = useContext(LoggedInUserContext);

  const onSubmit = useCallback((login: LoginType) => {
    loginUser(login, setUser);
  }, [setUser]);

  return (
    <LoginForm onSubmit={onSubmit} />
  );
};

export const Login = memo(LoginBase);

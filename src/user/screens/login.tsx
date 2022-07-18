import React, {
  FunctionComponent, memo, useCallback, useContext,
} from 'react';

import { Content } from 'layout';
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
    <Content limitedWidth>
      <LoginForm onSubmit={onSubmit} />
    </Content>
  );
};

export const Login = memo(LoginBase);

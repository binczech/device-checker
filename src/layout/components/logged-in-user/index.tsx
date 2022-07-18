import React, {
  FunctionComponent, memo, useCallback, useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { userStorage } from 'user';
import { LoggedInUserContext } from 'user/utils/logged-in-user-context';

import { Button } from '../button';

import './styles.scss';

const LoggedInUserBase: FunctionComponent = () => {
  const { user, setUser } = useContext(LoggedInUserContext);
  const navigate = useNavigate();

  const goToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const logoutUser = useCallback(() => {
    if (setUser) {
      setUser(null);
      userStorage.delete();
      goToLogin();
    }
  }, [goToLogin, setUser]);

  return (
    <div className="loggedInUser">
      {user ? (
        <>
          <div className="d-inline-block">
            {user.name}
          </div>
          <div className="d-inline-block px-2">
            <Button onClick={logoutUser}>Logout</Button>
          </div>
        </>
      ) : (
        <div className="px-2">
          <Button onClick={goToLogin}>Login</Button>
        </div>
      )}
    </div>
  );
};

export const LoggedInUser = memo(LoggedInUserBase);

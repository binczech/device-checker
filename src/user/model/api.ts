import { notification } from 'antd';
import { has, isString } from 'lodash/fp';

import { API_URL } from 'consts';
import { userStorage } from 'user/utils';

import {
  isValidUserWithToken, Login, User, UserInStorage, UserWithToken,
} from '../types';

// eslint-disable-next-line no-unused-vars
export const loginUser = async (login: Login, setUser: ((user: User) => void) | null): Promise<UserWithToken> => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(login),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    if (!isValidUserWithToken(data)) {
      const error = 'User with token from server is not valid';
      notification.open({
        message: 'Log in',
        description: error,
        type: 'error',
      });
      throw new Error(error);
    } else {
      const { id, token } = data;
      userStorage.set({ id, token });
      setUser?.(data);
      return data;
    }
  } else {
    const data = await response.json();

    const error: string = has('error')(data) && isString(data.error) ? data.error : 'Login was unsuccessful';
    notification.open({
      message: 'Log in',
      description: error,
      type: 'error',
    });
    throw new Error(error);
  }
};

export const fetchUser = async (user: UserInStorage | null): Promise<User> => {
  if (!user) {
    throw new Error('User was not provided to fetchUser');
  }
  const { id, token } = user;
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'GET',
    headers: {
      'Auth-Token': token,
    },
  });

  return response.json();
};

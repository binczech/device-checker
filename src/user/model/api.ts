import { has, isString } from 'lodash/fp';

import { API_URL } from 'consts';
import { showError } from 'layout';
import { userStorage } from 'user/utils';
import { getUser } from 'utils/get-user';

import {
  isValidUserWithToken, Login, User, UserInStorage, UserWithToken,
} from '../types';

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
      showError({ title: 'Log in', description: error });
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
    showError({ title: 'Log in', description: error });
    throw new Error(error);
  }
};

export const fetchUser = async (user: UserInStorage | null): Promise<User> => {
  const { id, token } = getUser();

  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'GET',
    headers: {
      'Auth-Token': token,
    },
  });

  return response.json();
};

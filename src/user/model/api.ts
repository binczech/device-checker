import { has, isString } from 'lodash/fp';

import { showError } from 'layout';
import { userStorage } from 'user/utils';
import { fetchData, fetchDataWithToken } from 'utils/fetch-data';
import { getUser } from 'utils/get-user';

import {
  isValidUser,
  isValidUserWithToken, Login, User, UserWithToken,
} from '../types';

export const loginUser = async (login: Login, setUser: ((user: User) => void) | null): Promise<UserWithToken> => {
  const response = await fetchData({
    pathname: '/login',
    method: 'POST',
    body: JSON.stringify(login),
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

export const fetchUser = async (): Promise<User> => {
  const { id } = getUser();

  const response = await fetchDataWithToken({ pathname: `/users/${id}` });

  const data = await response.json();

  if (!isValidUser(data)) {
    throw new Error('User from server is not valid');
  }

  return data;
};

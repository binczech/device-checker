import { isString } from 'lodash/fp';

import { isValidUserInStorage, UserInStorage } from 'user/types';

import { isLocalStorageAvailable } from './is-local-storage-available';

isLocalStorageAvailable();

const item = 'user';
const userStorageRegex = /^{"token":(.*),"id":(.*)}$/;

class UserStorage {
  public set(user: UserInStorage): void {
    const { id, token } = user;
    localStorage.setItem(item, JSON.stringify({ token, id }));
  }

  public get(): UserInStorage | null {
    try {
      const localStorageValue = localStorage.getItem(item);

      if (isString(localStorageValue) && userStorageRegex.test(localStorageValue)) {
        const user = JSON.parse(localStorageValue);
        if (isValidUserInStorage(user)) {
          return user;
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  public delete(): void {
    localStorage.removeItem(item);
  }
}

export const userStorage = new UserStorage();

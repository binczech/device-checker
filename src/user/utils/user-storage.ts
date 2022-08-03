import { isString } from 'lodash/fp';

import { isValidUserInStorage, UserInStorage } from 'user/types';

import { isLocalStorageAvailable } from './is-local-storage-available';

export const item = 'user';
const userStorageRegex = /^{"token":(.*),"id":(.*)}$/;

class UserStorage {
  public set(user: UserInStorage): void {
    if (!isLocalStorageAvailable()) return;

    const { id, token } = user;
    window.localStorage.setItem(item, JSON.stringify({ token, id }));
  }

  public get(): UserInStorage | null {
    if (!isLocalStorageAvailable()) return null;

    try {
      const localStorageValue = window.localStorage.getItem(item);

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
    if (!isLocalStorageAvailable()) return;
    window.localStorage.removeItem(item);
  }
}

export const userStorage = new UserStorage();

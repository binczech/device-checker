import { UserInStorage, userStorage } from 'user';

export const getUser = (): UserInStorage => {
  const user = userStorage.get();
  if (!user) {
    throw new Error('Token was not provided to toggleBorrowPhone');
  }

  return user;
};

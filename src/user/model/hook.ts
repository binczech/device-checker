import { useQuery } from 'react-query';

import { User } from 'user/types';
import { userStorage } from 'user/utils';

import { fetchUser } from './api';

export const useGetUser = () => {
  const user = userStorage.get();

  return useQuery<User, Error>(
    'user',
    () => fetchUser(user),
    { staleTime: 30000 },
  );
};

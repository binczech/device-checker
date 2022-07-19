import { useQuery } from 'react-query';

import { User } from 'user/types';

import { fetchUser } from './api';

export const useGetUser = () => useQuery<User, Error>(
  'user',
  fetchUser,
  { staleTime: 30000 },
);

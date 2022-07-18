import { createContext } from 'react';

import { User } from 'user/types';

export interface LoggedInUserContextProps {
    user: User | null;
    setUser: ((user: User | null) => void) | null;
}

export const LoggedInUserContext = createContext<LoggedInUserContextProps>({
  user: null,
  setUser: null,
});

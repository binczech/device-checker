import { equals, isObject, keys } from 'lodash/fp';

import { UserWithToken } from './user-with-token';

export type UserInStorage = Pick<UserWithToken, 'id' | 'token'>;

export const isValidUserInStorage = (x: unknown): x is UserInStorage => isObject(x) && equals(keys(x))(['token', 'id']);

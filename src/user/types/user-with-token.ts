import { isEmpty } from 'lodash';
import {
  equals, isNumber, isObject, isString, keys,
} from 'lodash/fp';

import { User } from './user';
import { isValidUserType } from './user-type';

export interface UserWithToken extends User {
    token: string;
}

const isUserWithToken = (x: any): x is UserWithToken => isObject(x)
    && equals(keys(x))(['id', 'type', 'login', 'name', 'token']);

export const isValidUserWithToken = (x: any): x is UserWithToken => isUserWithToken(x)
    && isString(x.id) && isNumber(Number(x.id))
    && isValidUserType(x.type)
    && isString(x.login) && !isEmpty(x.login)
    && isString(x.name) && !isEmpty(x.name)
    && isString(x.token) && !isEmpty(x.token);

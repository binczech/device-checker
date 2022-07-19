import {
  equals,
  isEmpty, isNumber, isObject, isString, keys,
} from 'lodash/fp';

import { isValidUserType, UserType } from './user-type';

export interface User {
    id: string;
    type: UserType;
    login: string;
    name: string;
}

const isUser = (x: any): x is User => isObject(x)
    && equals(keys(x).sort())(['id', 'type', 'login', 'name'].sort());

export const isValidUser = (x: any): x is User => isUser(x)
    && isString(x.id) && isNumber(Number(x.id))
    && isValidUserType(x.type)
    && isString(x.login) && !isEmpty(x.login)
    && isString(x.name) && !isEmpty(x.name);

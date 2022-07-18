import { UserType } from './user-type';

export interface User {
    id: string;
    type: UserType;
    login: string;
    name: string;
}

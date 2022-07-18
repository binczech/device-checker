export type UserType = 'user' | 'admin';

export const isValidUserType = (x: unknown): x is UserType => x === 'user' || x === 'admin';

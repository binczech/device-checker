import { item } from 'user/utils/user-storage';
import { getUser } from 'utils/get-user';

describe('getUser', () => {
  it('should return user from localStorage', () => {
    const user = { token: 'token', id: '1' };
    localStorage.setItem(item, JSON.stringify(user));
    expect(getUser()).toEqual(user);
  });
  it('should throw error if user is not in localStorage', () => {
    localStorage.removeItem(item);
    expect(() => getUser()).toThrowError('Token was not provided to toggleBorrowPhone');
  });
});

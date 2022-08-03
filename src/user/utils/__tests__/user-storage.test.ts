import { item, userStorage } from '../user-storage';

const data = { token: 'token', id: '1' };

describe('userStorage', () => {
  it('user should not be in localStorage', () => {
    localStorage.removeItem(item);
    expect(userStorage.get()).toBe(null);
  });
  it('user should be in localStorage', () => {
    localStorage.setItem(item, JSON.stringify(data));
    expect(userStorage.get()).toEqual(data);
    localStorage.removeItem(item);
    expect(userStorage.get()).toBeNull();
  });
  it('set should add user to localStorage', () => {
    expect(userStorage.get()).toBeNull();
    userStorage.set(data);
    expect(userStorage.get()).toEqual(data);
  });
  it('delete should remove user from localStorage', () => {
    userStorage.set(data);
    expect(userStorage.get()).toEqual(data);
    userStorage.delete();
    expect(userStorage.get()).toBeNull();
  });
});

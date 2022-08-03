export const userStorage = {
  set: jest.fn(),
  get: jest.fn(),
  delete: jest.fn(),
};

const localStorageMock = (function storage() {
  let store: Record<string, string> = {};
  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
}());
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

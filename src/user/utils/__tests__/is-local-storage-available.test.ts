import { isLocalStorageAvailable } from '../is-local-storage-available';

// localStorage is mocked and should be set
describe('isLocalStorageAvailable', () => {
  it('should return true', () => {
    expect(isLocalStorageAvailable()).toBe(true);
  });
});

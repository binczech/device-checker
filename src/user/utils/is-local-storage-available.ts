export const isLocalStorageAvailable = (): void => {
  try {
    const x = '__storage_test__';
    localStorage.setItem(x, x);
    localStorage.removeItem(x);
  } catch (e) {
    throw new Error('Local storage is not available');
  }
};

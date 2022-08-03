export const isLocalStorageAvailable = (): boolean => {
  try {
    const x = '__storage_test__';
    localStorage.setItem(x, x);
    localStorage.removeItem(x);

    return true;
  } catch (e) {
    return false;
  }
};

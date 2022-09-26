export const getValueFromLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};

export const setValueToLocalStorage = (key: string, value: string | object) => {
  try {
    // Allow value to be a function so we have same API as useState
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // A more advanced implementation would handle the error case
    console.error(error);
  }
};

export const clearLocalStorage = () => window.localStorage.clear();

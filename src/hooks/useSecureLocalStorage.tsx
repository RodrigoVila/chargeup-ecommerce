import { useState } from 'react';
import useEncryption from './useEncryption';

const { encryptData, decryptData } = useEncryption();

const useSecureLocalStorage = (key: string, initialValue: string | object) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(key);
        const decryptValue = decryptData(item);
        return decryptValue ? JSON.parse(decryptValue) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: string | object) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      const encryptedValue = encryptData(valueToStore);
      // Save state
      setStoredValue(encryptedValue);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(encryptedValue));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };

  const clearLocalStorage = () => window.localStorage.clear();
  return [storedValue, setValue, clearLocalStorage];
};

export default useSecureLocalStorage;

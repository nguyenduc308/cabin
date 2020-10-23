import React from 'react';

const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const valueInStorage = window.localStorage.getItem(key);
      return valueInStorage ? JSON.parse(valueInStorage || '') : '';
    } catch (error) {
      return '';
    }
  });
  const setValueLocalStorage = (values: any) => {
    try {
      const json = JSON.stringify(values);
      setStoredValue(json);
      window.localStorage.setItem(key, json);
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValueLocalStorage];
};

export default useLocalStorage;

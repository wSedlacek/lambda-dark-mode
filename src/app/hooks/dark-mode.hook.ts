import { useEffect } from 'react';
import { useLocalStorage } from './local-storage.hook';

const useDarkMode = (initialValue = false): [boolean, (enabled: boolean) => void] => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export { useDarkMode };

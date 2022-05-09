import { useCallback } from "react";

import { useThemeContext } from '../contexts';

const ThemeToggle = () => {
  const {isDarkMode, handleThemeChange} = useThemeContext();

  return (
    <button onClick={() => handleThemeChange(!isDarkMode)}>{isDarkMode ? 'Dark Theme' : 'Light Theme'}</button>
  );
};

export default ThemeToggle;
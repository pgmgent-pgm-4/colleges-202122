import { useCallback } from "react";

const ThemeToggle = ({isDarkMode, onThemeChanged}) => {

  const handleClick = useCallback(() => {
    if (typeof onThemeChanged === 'function') {
      onThemeChanged(!isDarkMode);
    }
  }, [isDarkMode, onThemeChanged]);

  return (
    <button onClick={handleClick}>{isDarkMode ? 'Dark Theme' : 'Light Theme'}</button>
  )
};

export default ThemeToggle;
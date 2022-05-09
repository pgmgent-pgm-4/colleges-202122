import { useThemeContext } from '../contexts';

import './ThemedButton.css';

const ThemeButton = () => {
  const {isDarkMode} = useThemeContext();

  return (
    <button className={`btn ${isDarkMode ? 'btn--dark' : 'btn-light'}`}>Styled Button</button>
  );
};

export default ThemeButton;
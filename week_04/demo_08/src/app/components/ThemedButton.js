import './ThemedButton.css';

const ThemeButton = ({isDarkMode}) => {
  return (
    <button className={`btn ${isDarkMode ? 'btn--dark' : 'btn-light'}`}>Styled Button</button>
  );
};

export default ThemeButton;
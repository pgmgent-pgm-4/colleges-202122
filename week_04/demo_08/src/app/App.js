import { useState } from 'react';
import './App.css';
import StopWatch from './components/StopWatch';
import ThemeButton from './components/ThemedButton';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
  }

  return (
    <div className="app">
      <StopWatch/>
      <ThemeToggle isDarkMode={isDarkMode} onThemeChanged={handleThemeChange}/>
      <ThemeButton isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;

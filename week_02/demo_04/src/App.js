import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { TagCloud, DefaultMenu, UserMenu, ThemeToggle } from './components';

import { dataTags } from './data';

import tagsData from './data/tagcloud.json';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkmode, setIsDarkmode] = useState(false);

  const handleThemeChange = (isDarkmode) => {
    setIsDarkmode(isDarkmode);
  };

  return (
    <div className={`app${isDarkmode === true ? ' app--isdarkmode': ''}`}>
      <ThemeToggle onThemeChanged={handleThemeChange} isDarkmode={isDarkmode} />
      <ThemeToggle onThemeChanged={handleThemeChange} isDarkmode={isDarkmode} />
      <ThemeToggle onThemeChanged={handleThemeChange} isDarkmode={isDarkmode} />
      <TagCloud tags={tagsData} />
      {isLoggedIn ? <UserMenu /> : <DefaultMenu/>}
    </div>
  );
}

export default App;

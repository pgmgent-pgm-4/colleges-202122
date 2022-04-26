import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { TagCloud, DefaultMenu, UserMenu } from './components';

import { dataTags } from './data';

import tagsData from './data/tagcloud.json';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <TagCloud tags={tagsData} />
      {isLoggedIn ? <UserMenu /> : <DefaultMenu/>}
    </div>
  );
}

export default App;

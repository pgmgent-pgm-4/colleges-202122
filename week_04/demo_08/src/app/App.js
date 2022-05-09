import { useState } from 'react';

import { ThemeProvider, UserProvider } from './contexts';

import Navigation from './components/Navigation';
import StopWatch from './components/StopWatch';
import ThemeButton from './components/ThemedButton';
import ThemeToggle from './components/ThemeToggle';

import './App.css';

function App() {
  return (
    <div className="app">
      <StopWatch/>
      <ThemeProvider>
        <UserProvider>
          <Navigation/>
          <ThemeToggle />
          <ThemeButton />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

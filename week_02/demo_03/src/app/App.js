import { useState } from 'react';

import './App.css';
import { Clock, ClockWithClass, ThemeMode } from './components';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ThemeMode />
      <Clock utc={count} />
      <Clock utc={4} />
      <Clock utc={3} />
      <ClockWithClass utc={6} />
      <ClockWithClass utc={-6} />
      <ClockWithClass utc={2} />
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click Count</button>
      </div>
    </div>
  );
}

export default App;

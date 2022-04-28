import { useState, useEffect } from 'react';

import './App.css';
import { EssayForm, JobsForm, NameForm, PostForm } from './components';

import { DimmedLamp, Dimmer } from './components/dimmer';

function App() {
  const [lampColor, setLampColor] = useState(`rgb(0, 0, 0)`);

  const handleDimmerValue = (v) => {
    setLampColor(`rgb(${v}, ${v}, ${v})`)
  }

  return (
    <div className="App">
      <Dimmer val={handleDimmerValue}/>
      <DimmedLamp lampColor={lampColor}/>
      <DimmedLamp lampColor={lampColor}/>
      <DimmedLamp lampColor={lampColor}/>
      <DimmedLamp lampColor={lampColor}/>
      <PostForm/>
      <NameForm/>
      <EssayForm />
      <JobsForm />
    </div>
  );
}

export default App;

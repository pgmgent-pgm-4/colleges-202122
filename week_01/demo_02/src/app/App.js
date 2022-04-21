import './App.css';

import { ClockWithClass, Greeting, GreetingWithClass } from './components';

const App = () => {
  return (
    <div className="App">
      <ClockWithClass />
      <Greeting message="Greatings Earthling" />
      <Greeting message={'Like Bash Love Code Make 8331 shit'} />
      <Greeting message={"Oudenaarde here we come"} />
      <GreetingWithClass message={"Oudenaarde here we come"} />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

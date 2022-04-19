import logo from './logo.svg';
import './App.css';

const todos = ['Bying food', 'Cook some meal', 'Do some Judo with Lester'];

const Item = ({message}) => {
  return <li className="task" data-say="{message}">{message}</li>;
};

const TodoList = ({todos}) => {
  return (
    <ul>
      {todos.map((todo, i) => <Item tabIndex={i} key={i} message={todo} />)}
    </ul>
  )
};

function App() {
  const name = 'Philippe De Pauw';
  const person = {
    firstName: 'Evelien',
    LastName: 'De Pauw',
  };
  const fullName = (person) => {
    return `${person.firstName} ${person.LastName}`;
  }
  return (
    <>
      <label htmlFor="txtEmail">Email</label>
      <input id="txtEmail" name="txtEmail" type="text" data-id="sla"></input>
      <TodoList todos={todos} />
      <Item message="Bying food" />
      <Item message="Cook some meal" />
      <Item message="Do some Judo with Lester" />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello 
            World to {name}
          </h1>
          <h2>{person.firstName} {person.LastName}</h2>
          <h3>{fullName(person)}</h3>
          <div className="person">
            <p>{fullName(person)}</p>
            <p>I'm the real slim shady</p>
          </div>
          <p>Etiam a magna dope augue hendrerit accumsizzle. Aenizzle break it down ghetto. Its fo rizzle go to hizzle dolizzle, bizzle vitae, facilisizzle id, pizzle izzle, erat. The bizzle ante ipsizzle primizzle in shizznit orci luctus izzle boom shackalack posuere fo Check it out; Stuff dolizzle. Shizznit crazy. Black pharetra blandit quizzle. Fo shizzle sizzle the bizzle orci. Shit facilisis. Hizzle sizzle nulla, go to hizzle eu, scelerisque the bizzle, blandizzle cool, magna.</p>
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
      <p>Sla</p>
      <p>{true}</p>
      <p>{false}</p>
      <p>{undefined}</p>
      <p>{null}</p>
      <p>{String(true)}</p>
    </>
  );
}

export default App;

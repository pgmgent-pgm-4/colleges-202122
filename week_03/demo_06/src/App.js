import logo from './logo.svg';
import './App.css';
import { Alert, AlertSuccess, Dialog, SplitPane } from './components';

function App() {
  return (
    <div className="App">
      <Alert title="Updated a post with is 12345" message="We like Bash love programming make cool stuff"/>
      <AlertSuccess title="Updated a post with is 12345" message="We like Bash love programming make cool stuff"/>
      <Dialog title="Updated a post with id 123453">
        <p>Updated a post with is 12345</p>
        <img alt="Game Handheld" src="https://tweakers.net/i/xhRzJOpAemwx6bIStPNpAGK6B24=/288x238/filters:strip_icc():strip_exif()/i/2005083792.jpeg?f=imagemedium"/>
      </Dialog>
      <SplitPane left={<Dialog title="Yes" />} right={<Dialog title="No" />}>
        <p>We like Bash love programming make cool stuff</p>
      </SplitPane>
    </div>
  );
}

export default App;

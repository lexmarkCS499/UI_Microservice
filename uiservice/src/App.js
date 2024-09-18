import logo from './logo.svg';
import './App.css';
import MyButton from './components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a basic react app!
        </p>
          <MyButton />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <header className="App-header">
          <Welcome name="Sara" />
          <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

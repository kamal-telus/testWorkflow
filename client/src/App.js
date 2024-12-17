import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Index';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
          <header className="App-header">
            
            <BrowserRouter>
            <div className="menu">
              <NavLink to="/" className={'navbar'}> <span > Home </span> </NavLink>
              <NavLink to="/welcome" className={'navbar'}> <span > Welcome </span> </NavLink>
              <NavLink to="/welcome" className={'navbar'}> <span > Welcome3 </span> </NavLink>
              <NavLink to="/welcome" className={'navbar'}> <span > Welcome4 </span> </NavLink>
              </div>
              <div className=''>
                <Routes>
                  <Route path="/welcome" element={<Welcome />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </div>
              
            </BrowserRouter>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
    </div>
  );
}

export default App;

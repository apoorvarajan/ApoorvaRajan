import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';
import Home from './components/home'

function App() {
  useEffect(() => {
    ReactGA.initialize('G-P88RFPWDVG');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

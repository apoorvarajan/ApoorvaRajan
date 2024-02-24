import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import PlayGround from './components/playground/playgroundMain'
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    ReactGA.initialize('G-P88RFPWDVG');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path="/playground" Component={PlayGround} />
        <Route path="/" Component={Home} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

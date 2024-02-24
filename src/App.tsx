import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import PlayGround from './components/playground/playgroundMain'
import { Routes, Route, createHashRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    ReactGA.initialize('G-P88RFPWDVG');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<PlayGround />} />
      </Routes>
    </div>
  );
}

export default App;

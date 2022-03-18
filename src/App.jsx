import React, { useEffect } from 'react';
import './App.css';
import Dice from './components/dice';

function App() {
  // for mobile height
  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', setFillHeight);
    setFillHeight();
  }, []);

  return (
    <div className="App">
      <Dice />
    </div>
  );
}

export default App;

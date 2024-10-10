import React, { useState } from 'react';
import './App.css';
import './theme.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme', !darkTheme);
  };

  return (
    <div className="app-container">
      <h1 className="title">Modern Counter App</h1>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button className="button increment" onClick={increment}>+</button>
        <button className="button reset" onClick={reset}>Reset</button>
        <button className="button decrement" onClick={decrement}>-</button>
      </div>
      <button className="theme-button" onClick={toggleTheme}>
        {darkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
}

export default App;

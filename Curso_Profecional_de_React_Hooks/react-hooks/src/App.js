import React, { useState } from 'react';
import Characters from './components/Characters';
import Header from './components/Header';
import './App.css';
import ThemeContext from './context/ThemeContext';

function App() {

  const [theme, updateTheme] = useState('bg-ligth');

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div className={`App${theme}`}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;

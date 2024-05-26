// src/App.jsx
import React, { useState } from 'react';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Ciudad from './Components/Ciudad';
import PrediccionEF from './Components/PrediccionEF';
import Más from './Components/Mas';
import './App.css';

function App() {
  const [view, setView] = useState('Home');

  const renderView = () => {
    switch (view) {
      case 'Home':
        return <Home />;
      case 'Ciudad':
        return <Ciudad />;
      case 'PrediccionEF':
        return <PrediccionEF />;
      case 'Más':
        return <Más />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setView={setView} />
      <div className="view-container">
        {renderView()}
      </div>
    </div>
  );
}

export default App;

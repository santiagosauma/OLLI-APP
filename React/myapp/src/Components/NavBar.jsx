// src/components/Navbar.jsx
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ setView }) => {
  const icon = "/OLLI-logo.png"; // Define la variable icon
  const title = "/OLLI-w.png"; // Define la variable title
  const [currentView, setCurrentView] = useState('Home');

  const handleItemClick = (view) => {
    setView(view);
    setCurrentView(view);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu_icon}>
        <img src={icon} alt="Menu Icon" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className={styles.header_title}>
        <img src={title} alt="OLLI APP" style={{ width: '100%', height: '100%' }}/>
      </div>
      <div className={styles.header_content}>
        <ul>
          <li className={currentView === 'Home' ? `${styles.active}` : ''} onClick={() => handleItemClick('Home')}>Inicio</li>
          <li className={currentView === 'Ciudad' ? styles.active : ''} onClick={() => handleItemClick('Ciudad')}>Predicción EF</li>
          <li className={currentView === 'PrediccionEF' ? styles.active : ''} onClick={() => handleItemClick('PrediccionEF')}>Ciudad</li>
          <li className={currentView === 'NuevoLeon' ? styles.active : ''} onClick={() => handleItemClick('NuevoLeon')}>NuevoLeon</li>
          <li className={currentView === 'Nosotros' ? styles.active : ''} onClick={() => handleItemClick('Más')}>Nosotros</li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
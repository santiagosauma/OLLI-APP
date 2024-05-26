// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ setView }) => {
  const icon = "/OLLI-logo.png"; // Define la variable icon
  const title = "/OLLI-2.png"; // Define la variable title

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
                <li onClick={() => setView('Home')}>Inicio</li>
                <li onClick={() => setView('Ciudad')}>Ciudad</li>
                <li onClick={() => setView('PrediccionEF')}>Predicción EF</li>
                <li onClick={() => setView('Más')}>Más</li>
            </ul>
        </div>

    </nav>
  );
};

export default Navbar;
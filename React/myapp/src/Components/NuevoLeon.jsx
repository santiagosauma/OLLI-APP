
import React, { useState } from 'react';
import styles from './NuevoLeon.module.css';

const NuevoLeon = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (stateId) => {
    setSelectedState(stateId);
  };

  return (
    <div className={styles.body_index}>
      <div className={selectedState ? styles.body_index2_selected : styles.body_index2}>
        <div className={selectedState ? styles.mapContainer_selected : styles.mapContainer}>
          <div className={styles.mapTitle}>
            Predicción de Consumo eléctrico por Entidad Federativa
          </div>
          <div className={styles.mapadiv}>
           
          </div>
        </div>
        {selectedState && (
          <div className={styles.infoContainer}>
          <div className={styles.mapTitle}>
          <h2>Estado: {selectedState}</h2>
          </div>
            
            <p>Consumo de energía: [datos]</p>
            <p>Clima: [datos]</p>
            <p>Energia prevista: [datos]</p>
            <button onClick={() => setSelectedState(null)}>Volver</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default NuevoLeon;




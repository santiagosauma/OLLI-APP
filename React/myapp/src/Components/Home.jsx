import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (

    <div className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title_index}>¡Bienvenido!</h1>
            <br />
            <div className={styles.main_description}>
              <h3>Somos OLLI, una aplicación informativa que utiliza modelos de Inteligencia Artificial para potenciar a la comunidad. Nuestros modelos ayudan a reducir los apagones de luz en ciudades, municipios, barrios y comunidades en general mediante la predicción del consumo energético. 
              </h3>
              <br />
              <h3>Dado que el consumo ha superado las expectativas, nuestros modelos consideran una gran cantidad de variables para ofrecer soluciones efectivas y prevenir interrupciones en el suministro eléctrico. ¡Juntos, podemos hacer que nuestras comunidades sean más eficientes y seguras!</h3>
            </div>
      </div>
      <div className={styles.sun}>
        <img src="Chispa.png" alt="Sol sonriente" />
      </div>





    {/*
    <div className={styles.body_index}>
    <div className={styles.post_body_container}>
          <div className={styles.gradient_border}>
            <h1 className={styles.title_index}>¡Bienvenido!</h1>
            <br />
            <div className={styles.main_description}>
              <h3>Somos OLLI, una aplicación informativa que utiliza modelos de Inteligencia Artificial para potenciar a la comunidad. Nuestros modelos ayudan a reducir los apagones de luz en ciudades, municipios, barrios y comunidades en general mediante la predicción del consumo energético. 
              </h3>
              <br />
              <h3>Dado que el consumo ha superado las expectativas, nuestros modelos consideran una gran cantidad de variables para ofrecer soluciones efectivas y prevenir interrupciones en el suministro eléctrico. ¡Juntos, podemos hacer que nuestras comunidades sean más eficientes y seguras!</h3>
            </div>
          </div>
    
        </div>
        </div>
        */}
            </div>

    
  );
};

export default Home;

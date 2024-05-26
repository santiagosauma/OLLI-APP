import React from 'react';
import styles from './Mas.module.css';
import TeamCard from './TeamCard';

 
const Más = () => {

  const teamMembers = [
    {
      name: 'Jesús Ramírez',
      image: 'https://assets.entrepreneur.com/images/misc/1648673865_ent22_aprilmay_qandatc1.jpg?width=1000',
      mail: '',
      github: 'https://github.com/IsaacRoSosa',
      linkedn: '',
      wha: ''
    },    {
      name: 'Luis Santiago Sauma',
      image: 'https://assets.entrepreneur.com/images/misc/1648673865_ent22_aprilmay_qandatc1.jpg?width=1000',
      mail: 'mailto:lssaumap@gmail.com',
      github: 'https://github.com/SantiagoSauma',
      linkedn: 'https://www.linkedin.com/in/santiagosauma/',
      wha: ''
    },    {
      name: 'Isaac Rojas Sosa',
      image: 'https://assets.entrepreneur.com/images/misc/1648673865_ent22_aprilmay_qandatc1.jpg?width=1000',
      mail: '',
      github: 'https://github.com/IsaacRoSosa',
      linkedn: 'linkedin.com/in/isaacrojassosa',
      wha: ''
    },    {
      name: 'Héctor Garza',
      image: 'https://assets.entrepreneur.com/images/misc/1648673865_ent22_aprilmay_qandatc1.jpg?width=1000',
      mail: '',
      github: 'https://github.com/IsaacRoSosa',
      linkedn: '',
      wha: ''
    },
  ];
  
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h1>EL EQUIPO DE DESARROLLO</h1></div>
   
      <div className={styles.contenedor_nosotros}>
      {teamMembers.map((member, index) => (
        <div className={styles.columna_nosotros} key={index}>
          <TeamCard name={member.name} image={member.image} mail={member.mail} github={member.github} linkedn={member.linkedn} wha={member.wha} />
        </div>
      ))}
   
    </div>
    </div>
  );
};

export default Más;
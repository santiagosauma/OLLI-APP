import React from 'react';
import styles from './Mas.module.css';
import TeamCard from './TeamCard';

 
const Más = () => {

  const teamMembers = [
    {
      name: 'Jesús Ramírez',
      image: 'https://media.licdn.com/dms/image/D4E03AQF17jr3J7EUzg/profile-displayphoto-shrink_400_400/0/1698896187725?e=1722470400&v=beta&t=PW9dOteI72tRk6h2Mx9582U6x_s2peeMIrL-rrdQFfo',
      mail: 'mailto:a00835680@tec.mx',
      github: 'https://github.com/JesusRam04',
      linkedn: 'linkedin.com/in/jesusmend',
      wha: ''
    },    {
      name: 'Luis Santiago Sauma',
      image: 'https://media.licdn.com/dms/image/D4E03AQF9LvYy6lsxBg/profile-displayphoto-shrink_400_400/0/1700778494620?e=1722470400&v=beta&t=he71xZW5hMqYNMaM8cLlvLo0WatIuF6Be1RssbWedck',
      mail: 'mailto:lssaumap@gmail.com',
      github: 'https://github.com/SantiagoSauma',
      linkedn: 'https://www.linkedin.com/in/santiagosauma/',
      wha: ''
    },    {
      name: 'Isaac Rojas Sosa',
      image: 'https://media.licdn.com/dms/image/D5603AQGtkIoEFpAAJA/profile-displayphoto-shrink_400_400/0/1716596325922?e=1722470400&v=beta&t=xyhyT2Wt0qH0Uq_s3UGRBMZ9SsqUhptK-2_HUlun1OM',
      mail: 'mailto:isaacrojassosa@gmail.com',
      github: 'https://github.com/IsaacRoSosa',
      linkedn: 'linkedin.com/in/isaacrojassosa',
      wha: ''
    },    {
      name: 'Héctor Garza',
      image: 'https://media.licdn.com/dms/image/D5603AQEsSxQWo5JiQA/profile-displayphoto-shrink_400_400/0/1712380532007?e=1722470400&v=beta&t=n5uvp9XiDXS5RhIDlOizDGmrNGEjKcj_Isjn9GjA6pc',
      mail: 'mailto:garzahector1013@gmail.com',
      github: 'https://github.com/Fraga9',
      linkedn: 'https://www.linkedin.com/in/héctor-garza-fraga-6b660723a/',
      wha: ''
    },
  ];
  
  return (
    <div className={styles.container}>
       <div className={styles.body_index2}>

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
    </div>
  );
};

export default Más;
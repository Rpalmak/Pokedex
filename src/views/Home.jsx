import React from 'react';
import PikachuImage from '../assets/img/Pikachu_original.png';

function Home() {
  return (
    <div className="text-center" style={{ backgroundColor: 'transparent' }}>
      <h1>Bienvenido maestro Pokémon!</h1>
      <img src={PikachuImage} alt="Pikachu" style={{ width: '300px', marginTop: '20px' }} />
    </div>
  );
}

export default Home;

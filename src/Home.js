import React from 'react';
import "./Home.css";

function Home() { //componente Header
  return (
    <div>
      <div className='home'>
         { <div className='trianguloBlanco1'/> 
          }
      </div>
      <p className='saludo'>
        <h1>Hola.</h1>
        <h1>Yo soy Juan</h1>
      </p>
      <div className='circulo'></div>
      <p>
        <h1 className='cargo'>Desarrolador FullStack :D</h1>
      </p>
      <div className='empty'></div>
    </div>
    );
}

export default Home
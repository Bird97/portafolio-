import React from 'react';
import "./Aboutme.css";

function Aboutme() { //componente Header
  return (
    <div>
        <div id="Aboutme" className='contenido'>
          <div className='AboutmeCont'> 
            <h1><div className='resumen'>Me considero una persona apasionada, activa, creativa y dinámica.
                Se me es fácil comunicarme con los demás y trabajar en grupo. 
                Presento facilidad para aprender,enseñar y capacidad para tomar
                decisiones. 
                
                Sé liderar, tengo buenas relaciones 
                interpersonales y siempre mantengo una 
                actitud positiva.
                
                </div></h1>
              <div className='aboutmeimg'></div>
          </div>
          <div className='circuloA1'> circulo 1</div>
          <div className='circuloA2'> circulo 2</div>
        </div>
        <div className='triangulo1'></div>
    </div>
    );
}

export default Aboutme
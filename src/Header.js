import React from 'react';
import "./Header.css";

function Header() { //componente Header
  return (
    <div className='header'>
        <div className='header__logo'>
            {//<StorefrontIcon className='header__logoImage' fontSize="large"/>
            }
        </div>   
        <div className="header__nav">
            <div className="nav__item">
                <span className="nav__itemLineTwo"><a href='#'>Inicio</a> </span>
            </div>

            <div className="nav__item">
                <span className="nav__itemLineTwo"><a href='#Aboutme'>Acerca de mi</a></span>
            </div>

            <div className="nav__item">
                <span className="nav__itemLineTwo"><a href='#Skills'>Habilidades</a></span>
            </div>

            <div className="nav__item">
                <span className="nav__itemLineTwo"><a href='#Proyects'>Proyectos</a></span>
            </div>

            <div className="nav__item">
                <span className="nav__itemLineTwo"><a href='#Contact'>Contacto</a></span>
            </div>         
        </div>
    </div>
    );
}

export default Header
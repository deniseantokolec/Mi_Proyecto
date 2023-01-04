import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../img/logo.jpg'
import './nav.css'

function Nav (){
    return(
        <div className="navbar">
            <img src={logo} alt="Logo" className='icono' />
            <ul className="nav">
                <li className="nosotrosnav"><Link to={'/'}>Nosotros</Link></li>
                <li className="productosnav"><Link to={'/Productos/'}>Productos</Link></li>
                <li className="galerianav"><Link to={'/Galeria'}>Galeria</Link></li>
                <li className="contactonav"><Link to={'/Contacto/'}>Contacto</Link></li>
            </ul>

        </div>
        
        
    )
   
}

export default Nav
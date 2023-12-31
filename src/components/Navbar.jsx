import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            {/*<li><Link className="menu-link" to="/productos">Productos</Link></li>*/}
            <li><Link className="menu-link" to="/productos/Auto">Autos</Link></li>
            <li><Link className="menu-link" to="/productos/Moto">Motos</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}  

export default Navbar; 

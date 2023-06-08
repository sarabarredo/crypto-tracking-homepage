import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    var prevScrollPosition = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPosition = window.pageYOffset;
        if (prevScrollPosition > currentScrollPosition) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-90px";
        }
    prevScrollPosition = currentScrollPosition;
}

  return (
    <div className='header' id='navbar'>
        <div className='container'>
            <h1>
                <a href="/">Cryp<span className='primary'>To</span></a>
            </h1>
            <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                <li>
                    <a href='/'>Inicio</a>
                </li>
                <li>
                    <a href='#tendencies'>Tendencias</a>
                </li>
                <li>
                    <a href='#sign'>Registro</a>
                </li>
            </ul>
            <div className='btn-group'>
                <button className='btn'>Mi Wallet</button>
            </div>
            <div className='hamburguer' onClick={handleClick}>
                { click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />) }
            </div>
        </div>
    </div>
  )
}

export default Navbar;
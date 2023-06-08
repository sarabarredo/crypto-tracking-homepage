import React from 'react';
import './Footer.css';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col col-1'>
                <h1>
                    <a href='/'>Cryp<span className='primary'>To</span></a>
                </h1>
            </div>
            <div className='col'>
                <h5>Servicios</h5>
                <span className='bar'></span>
                    <a href='/'>Contacta con nosotros</a>
                    <a href='/'>Chat</a>
                    <a href='/'>Centro de ayuda</a>
                    <a href='/'>FAQ</a>
            </div>
            <div className='col'>
                <h5>Desarrolladores</h5>
                <span className='bar'></span>
                    <a href='/'>Cloud</a>
                    <a href='/'>E-commerce</a>
                    <a href='/'>Pro</a>
                    <a href='/'>API</a>
            </div>
            <div className='col'>
                <h5>Empresa</h5>
                <span className='bar'></span>
                    <a href='/'>Sobre nosotros</a>
                    <a href='/'>Información</a>
                    <a href='/'>Aviso legal</a>
                    <a href='/'>Politica de privacidad</a>
            </div>
            <div className='col'>
                <h5>Síguenos</h5>
                <span className='bar'></span>
                    <a href='/'><FaFacebook className='icon' />Facebook</a>
                    <a href='/'><FaTwitter className='icon' />Twitter</a>
                    <a href='/'><FaLinkedin className='icon' />LinkedIn</a>
                    <a href='/'><FaGithub className='icon' />GitHub</a>
            </div>
        </div>

    </div>
  )
}

export default Footer;
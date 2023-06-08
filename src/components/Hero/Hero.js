import React from 'react';
import './Hero.css';
import Lottie from "lottie-react";
import CryptoAnimation from "../../crypto-animation.json";


const Hero = () => {
   return (
    <div className='hero'>
        <div className='container'>
            <div className='left'>
                <p>Compra y vende criptomonedas utilizando tu propia cuenta bancaria</p>
                <h1>Invierte en monedas virtuales y gana</h1>
                <p>Compra, vende y almacena decenas de criptomonedas</p>
                <div className='input-container'>
                    <input type='email' placeholder='Escribe aquí tu email' />
                    <button className='btn'>Saber más</button>
                </div>
            </div>
            
            <div className='right'>
                <div className='animation-container'>
                    <Lottie animationData={CryptoAnimation} className="animation"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
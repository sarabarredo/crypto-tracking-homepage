import React from 'react';
import './SignIn.css';
import Crypto from '../../assets/phone-img.png';

const SignIn = () => {
  return (
    <div className='sign' id='sign'>
        <div className='container'>
            <div className='left'>
                <img src={Crypto} alt='' />
            </div>
            <div className='right'>
                <h2>Genera ingresos pasivos con CrypTo</h2>
                <p>Consigue una bonificación adicional del 12% en más de 30 criptomonedas.</p>
                <div className='btn-container'>
                    <button className='btn'>Registrarse ahora</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignIn;
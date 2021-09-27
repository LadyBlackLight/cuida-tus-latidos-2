import React from 'react';
import './first.css';
import mano from '../../assets/mano-1-inicio.png';
import logo from '../../assets/logo-cuida-tus-latidos.png';
import logomobile from '../../assets/logo-mobile.png';
import manomobile from '../../assets/mano-1-mobile.png';

export default function First() {
    return (
        <>
            <div className="first">
                <div className="column-image">
                    <img src={mano} alt="Mano" />
                </div>
                <div className="column-text">
                    <h1>¡Escucha tu corazón!</h1>
                    <img src={logo} className="logo" alt="Logo Cuida tus Latidos" />
                </div>
            </div>
            <div className="mobile-first">
                <img src={logomobile} alt="Logo Cuida tus Latidos"/>
                <h1>¡Escucha tu <span>corazón!</span></h1>
                <img src={manomobile} className="manoMobile" alt="Mano"/>
            </div>
        </>
    )
}

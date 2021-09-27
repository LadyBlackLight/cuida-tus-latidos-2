import React from 'react';
import './nine.css';
import mano from '../../assets/mano-1-inicio.png';
import logo from '../../assets/logo-cuida-tus-latidos.png';
import logomobile from '../../assets/logo-mobile.png';
import manomobile from '../../assets/mano-1-mobile.png';

export default function Nine() {
    return (
        <>
            <div className="nine">
                <div className="column-image">
                    <img src={mano} alt="Mano" />
                </div>
                <div className="column-text">
                    <img src={logo} className="logo" alt="Logo Cuida tus Latidos" />
                    <a className="download" href="#" target="_blank">¡Conoce nuestra guía, dando click aquí!</a>
                </div>
            </div>
            <div className="mobile-nine">
                <img src={logomobile} alt="Logo Cuida tus Latidos" />
                <img src={manomobile} className="manoMobile" alt="Mano" />
                <a className="download-nine" href="#" target="_blank">¡Conoce nuestra guía, dando click aquí!</a>
            </div>
        </>
    )
}

import React from 'react';
import './five.css';
import minilogo from '../../assets/mini-logo.png';
import logomobile from '../../assets/logo-mobile.png';
import mano from '../../assets/mano.png';

export default function Countdown(props) {

    return (
        <div className="countdown">
            <div className="five">
                <img className="desktop" src={minilogo} alt="Mini Logo" />
                <img className="mobile" src={logomobile} alt="Mini Logo" />
                <h2>{props.timer}</h2>
                <p>Cuenta el número de pulsaciones (latidos) que tienes en un periodo de 1 minuto.</p>
            </div>
            <div className="five">
                <img className="hand" src={mano} alt="Mano" />
            </div>
        </div>
    )
}

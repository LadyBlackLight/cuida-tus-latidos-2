import React from 'react';
import './seven.css';
import minilogo from '../../assets/mini-logo.png';
import resultado1 from '../../assets/resultado-1.png';
import resultado1mobile from '../../assets/resultado-1-mobile.png';
import logomobile from '../../assets/logo-mobile.png';
import corazon from '../../assets/heart.png';

export default function Seven() {
    return (
        <div className="seven-container">
            <div className="seven">
                <img className="desktop" src={minilogo} alt="Mini Logo"/>
                <img className="mobile" src={logomobile} alt="Mini Logo" />
                <img className="resultado desktop" src={resultado1} alt="Resultado 1"/>
                <img className="resultado mobile" src={resultado1mobile} alt="Resultado 1"/>
            </div>
            <div className="seven">
                <img className="corazon" src={corazon} alt="Corazón" />
            </div>
        </div>
    )
}

import React from 'react';
import './eight.css';
import minilogo from '../../assets/mini-logo.png';
import logomobile from '../../assets/logo-mobile.png';
import resultado2 from '../../assets/resultado-2.png';
import resultado2mobile from '../../assets/resultado-2-mobile.png';
import corazon from '../../assets/heart.png';

export default function Eight() {
    return (
        <div className="eight-container">
            <div className="eight">
                <img className="desktop" src={minilogo} alt="Mini Logo" />
                <img className="mobile" src={logomobile} alt="Mini Logo" />
                <img className="resultado desktop" src={resultado2} alt="Resultado 1" />
                <img className="resultado mobile" src={resultado2mobile} alt="Resultado 1" />
            </div>
            <div className="eight">
                <img className="corazon" src={corazon} alt="Corazón" />
            </div>
        </div>
    )
}

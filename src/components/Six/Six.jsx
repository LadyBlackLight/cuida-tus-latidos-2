import React from 'react';
import './six.css';
import resultados from '../../assets/resultados.png';

export default function Six() {
    return (
        <div className="six-container">
            <div className="six">
                <h2>¡Listo!</h2>
                <p>Haz click en "Next" para comprender tu resultado</p>
            </div>
            <div className="six">
                <img className="resultados" src={resultados} alt="Mano" />
            </div>
        </div>
    )
}

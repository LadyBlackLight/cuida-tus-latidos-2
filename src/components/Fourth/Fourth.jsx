import React from 'react';
import './fourth.css';
import iniciar from '../../assets/iniciar-conteo.png';

export default function Fourth() {
    return (
        <div className="fourth">
            <img src={iniciar} alt="Iniciar conteo"/>
            <p className="text-green">Empieza a contar</p>
        </div>
    )
}

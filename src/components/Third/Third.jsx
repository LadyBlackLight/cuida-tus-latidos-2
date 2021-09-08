import React from 'react';
import './third.css';
import instruccion1 from '../../assets/instruccion-1.png'

export default function Third() {
    return (
        <div className="third">
            <img src={instruccion1} alt="Instrucción 1" />
            <p>Con los dedos índice y medio de una de tus manos, encuentra tu pulso en la muñeca de tu brazo contrario o en
                tu cuello</p>
            <p className="text-red">Encuentra tus pulsaciones</p>
        </div>
    )
}

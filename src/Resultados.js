import React from 'react'
import Tarjeta from './Tarjeta'

export default function Resultados() {
    return (
        <div className='resultado'>
            <h1>Los campeones contra los cuales tienes peor winrate son:</h1>
            <Tarjeta />
        </div>
    )
}

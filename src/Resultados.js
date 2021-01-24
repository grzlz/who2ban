import React, {useEffect }  from 'react'
import { useLocation } from 'react-router-dom'
import Tarjeta from './Tarjeta'

export default function Resultados() {

    const { params } = useLocation()

    useEffect(() => {
        console.log(params)
    })

    return (
        <div className='resultado'>
            <h1>Los campeones contra los cuales tienes peor winrate son:</h1>
            <Tarjeta nombre={params.nombre}/>
        </div>
    )
}

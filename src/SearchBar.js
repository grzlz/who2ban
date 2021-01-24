import React, { useState } from 'react'
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'


export default function SearchBar() {
    const [nombre, setNombre] = useState({ 'nombre': '' })

    const handleChange = e => {
        setNombre({ 'nombre': e.target.value })
        console.log(nombre.nombre)
    }

    return (
        <div className='App'>
            <img alt='no hay nada' src='https://i.pinimg.com/originals/0c/cf/5a/0ccf5a0477a46f2f8f892f757b08d70c.png'></img>

            <div className='searchBar'>
                <div className='box-test'>

                    <Input placeholder="Nombre" onChange={handleChange} className='inpt'></Input>
                    <Link 
                        to={{pathname:'/resultados', params: nombre}}
                        >
                        <Button className='btn-test'>Buscar</Button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

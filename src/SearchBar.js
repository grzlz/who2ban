import React, { useState } from 'react'
import { Input, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'


export default function SearchBar() {
    const [nombre, setNombre] = useState({'nombre': ''})

    const handleChange = e => {
        setNombre({'nombre': e.target.value})
        console.log(nombre.nombre)
    }

    return (
        <div className='App'>
            <img src='https://i.pinimg.com/originals/0c/cf/5a/0ccf5a0477a46f2f8f892f757b08d70c.png'></img>
            <div className='searchBar'>

                <Row>
                    <Col span={12} offset={6}>

                        <Input placeholder="Nombre" onChange={handleChange}></Input>
                        <Link to='/resultados'>
                            <Button >Buscar</Button>
                        </Link>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

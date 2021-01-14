import React from 'react'
import { Input, Row, Col, Layout, Space } from 'antd';
import 'antd/dist/antd.css'

const { Search } = Input
const { Content } = Layout


export default function Body() {
    return (
        <div>
            <img src='https://i.pinimg.com/originals/0c/cf/5a/0ccf5a0477a46f2f8f892f757b08d70c.png'></img>

            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="Introduce tu nombre de invocador..."
                        allowClear
                        enterButton="Buscar"
                        size="large"
                    />
                </Col>
            </Row>




        </div>
    )
}

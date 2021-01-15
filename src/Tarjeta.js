import React from 'react'
import { Card, Col, Row } from 'antd'

const { Meta } = Card;

export default function Tarjeta() {

    const champions = [
        { name: 'Zed', winrate: '15%', img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg' },
        { name: 'Ahri', winrate: '13%', img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
        { name: 'Sett', winrate: '7%', img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg' }
    ]

    return (
        <div className='cards'>
            <Row>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 440 }}
                        cover={<img alt="example" src= {champions[0].img} />}
                    >
                        <Meta title={champions[0].name} description={champions[0].winrate} />
                    </Card>

                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 440 }}
                        cover={<img alt="example" src={champions[1].img} />}
                    >
                        <Meta title={champions[1].name} description={champions[1].winrate} />
                    </Card>

                </Col>

                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 440 }}
                        cover={<img alt="example" src= {champions[2].img} />}
                    >
                        <Meta title={champions[2].name} description={champions[2].winrate} />
                    </Card>

                </Col>

            </Row>

        </div>
    )
}

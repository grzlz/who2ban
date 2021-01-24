import React from 'react'
import { Menu } from 'antd'
import 'antd/dist/antd.css'


export default function Navigation() {
    return (

            <Menu mode="horizontal" theme="dark">
                <Menu.Item key="home">
                    Who 2 ban
                </Menu.Item>
                <Menu.Item key="about">
                    About us
                </Menu.Item>
                <Menu.Item key="contact">
                    Contact
                </Menu.Item>
            </Menu>

    )
}

import React from 'react'
import {Button,Menu,Typography,Avatar} from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'
const Navbar = () => {
  return (
    <div className="nav-container">
    <div className="logo-container">
    <Avatar src={icon} size="large" />
    <Typography.Title level={2} className="logo">
    <Link to="/">Cryptoverse</Link>
    </Typography.Title>
    <Menu theme="dark">
    <Menu.Item  icon={<HomeOutlined/>}>
    <link to="/">Home</link>
    </Menu.Item>
    <Menu.Item  icon={<C/>}>
    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
    </Menu.Item>

    <Menu.Item  icon={<HomeOutlined/>}>
    <link to="/">Home</link>
    </Menu.Item>

    </Menu>
    </div>
</div>
  )
}

export default Navbar
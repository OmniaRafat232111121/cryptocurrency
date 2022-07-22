import React from 'react'
import {Button,Menu,Typography,Avatar} from 'antd'
import {Link} from 'react-rrouter-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="nav-container">
    <div className="logo-container">
    <Avatar src={ic} />
    <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
     <Button className="menu-control-container"></Button>
    </div>
</div>
  )
}

export default Navbar

import React from 'react'
import millify from 'millify'
import {Typography,Row,Col,Statistic} from 'antd'
import {Link} from 'react-router-dom'
const {Title}=Typography;
const Homepage = () => {
  return (
    <>
 <Title level={2} classname="heading">
Global Crypto Stats
 </Title>
 <Row>
 <Col span={1}><Statistic title="Total Cryptocurrencies" /></Col>
 <Col span={12}><Statistic title="Total Exchanges"  /></Col>
 <Col span={12}><Statistic title="Total Market Cap:"  /></Col>
 <Col span={12}><Statistic title="Total 24h Volume"  /></Col>
 <Col span={12}><Statistic title="Total Cryptocurrencies"  /></Col>
 <Col span={12}><Statistic title="Total Markets"  /></Col>
 </Row>
    </>
  )
}

export default Homepage
import React from 'react'
import millify from 'millify'
import {Typography,Row,Cl,Statistic} from 'antd'
import {Link} from 'react-router-dom'
const {Title}=Typography;
const Homepage = () => {
  return (
    <>
 <Title level={2} classname="heading">
Global Crypto Stats
 </Title>
 <Row>
 <Col span={12}><Statistic  title="" value/></Col>
 </Row>
    </>
  )
}

export default Homepage
import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';


const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState();
  console.log(cryptos)
  return (
    <>
    <Row  gutters={[32,32]} className="crypto-card-container">
    {cryptos.map((current)=>{
      <Col xs={24} sm={12}>

      </Col>
    })}
    </Row>
    </>
  )
}

export default Cryptocurrencies
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
    {cryptos.map((current)=>(
      <Col xs={24} sm={12} lg={6} className="crypto-card" key={current.id}>
        <Link to={`/crypto/${currency.id}`}>
        <card
        title={`${currency.rank} .${currency.name}`}>

        </card>


        </Link>

      </Col>
  ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies
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
=
      <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
        <Card
        title={`${currency.rank}. ${currency.name}`}
        extra={<img className="crypto-image" src={currency.iconUrl} />}
        hoverable
      >
        <p>Price: {millify(currency.price)}</p>
        <p>Market Cap: {millify(currency.marketCap)}</p>
        <p>Daily Change: {currency.change}%</p>
        </Card>


        </Link>

      </Col>
  ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies
import React from 'react'
import millify from'millify'
import {Link} from 'react-router-dom'
import {card,Row,Col,Input} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
const Cryptocurrencies = () => {
  const {data:cryptosList,isfetching}=useGetCryptosQuery();
  c
  return (
    <div>
    </div>
  )
}

export default Cryptocurrencies
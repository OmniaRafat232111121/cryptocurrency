import React from 'react'
import {Select,Typography,Row,Col,Avatar,Card} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
const {Text,Title} =Typography;
const {Option}=Select;
const News = ({sim}) => {
  const {data:cryptoNws}=useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
  return (
    <div>

    
    
    </div>
  )
}

export default News
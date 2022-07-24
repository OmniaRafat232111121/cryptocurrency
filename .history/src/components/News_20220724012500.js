import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  if (!cryptoNews?.value) return '..Loading';
  return (
    <div>
<Row gutter={[24,24]}>
{cryptoNews.value.map((news,i)=>(
<Col xs={24} sm={12} lg={8} key={i}>
  <Card hoverable className="news-card">
     <a href={news.url} target="_blank">
     <div className="news-image-container">
     <Title className="news-"> </Title>
     </div>
     
     </a>
  </Card>
</Col>
))}

</Row>
    
    
    </div>
  )
}

export default News
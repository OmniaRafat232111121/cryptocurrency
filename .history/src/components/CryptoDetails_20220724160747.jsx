
    <Col className="stats-container">
      <Col className="coin-value-statistics">
        <Col className="coin-value-statistics-heading">
          <Title level={3} className="coin-details-heading">{cryptoDetails.name} Value Statistics</Title>
          <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
        </Col>
        {stats.map(({ icon, title, value }) => (
          <Col className="coin-stats">
            <Col className="coin-stats-name">
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className="stats">{value}</Text>
          </Col>
        ))}
      </Col>
      <Col className="other-stats-info">
        <Col className="coin-value-statistics-heading">
          <Title level={3} className="coin-details-heading">Other Stats Info</Title>
          <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
        </Col>
        {genericStats.map(({ icon, title, value }) => (
          <Col className="coin-stats">
            <Col className="coin-stats-name">
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className="stats">{value}</Text>
          </Col>
        ))}
      </Col>
    </Col>
    <Col className="coin-desc-link">
      <Row className="coin-desc">
        <Title level={3} className="coin-details-heading">What is {cryptoDetails.name}?</Title>
        {HTMLReactParser(cryptoDetails.description)}
      </Row>
      <Col className="coin-links">
        <Title level={3} className="coin-details-heading">{cryptoDetails.name} Links</Title>
        {cryptoDetails.links?.map((link) => (
          <Row className="coin-link" key={link.name}>
            <Title level={5} className="link-name">{link.type}</Title>
            <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
          </Row>
        ))}
      </Col>
    </Col>
  </Col>
);
};


export default CryptoDetails;
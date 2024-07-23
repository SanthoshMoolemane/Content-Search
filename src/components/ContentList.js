import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentCard from './ContentCard';
import '../custom.css';

const ContentList = ({ contents }) => {
  return (
    <Container className="content-list">
      <Row>
        {contents.map(content => (
          <Col key={content.id} xs={12} md={6} lg={4}>
            <ContentCard
              name={content.name}
              image={content.image}
              categories={content.categories}
              experts={content.experts}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ContentList;

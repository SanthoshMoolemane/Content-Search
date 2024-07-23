import React from 'react';
import { Card } from 'react-bootstrap';
import '../custom.css';

const ContentCard = ({ name, image, categories, experts }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={image.uri} alt={name} className="card-img-top" />
      <Card.Body className="card-body">
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Categories: {categories.map(category => category.name).join(', ')}
          </Card.Text>
        </div>
        <Card.Text>
          Experts: {experts.map(expert => `${expert.firstName} ${expert.lastName}`).join(', ')}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ContentCard;

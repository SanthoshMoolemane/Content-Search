import React from 'react';
import { Card } from 'react-bootstrap';

const ContentCard = ({ name, image, categories, experts }) => {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={image.uri} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Categories: {categories.map(category => category.name).join(', ')}
        </Card.Text>
        <Card.Text>
          Experts: {experts.map(expert => `${expert.firstName} ${expert.lastName}`).join(', ')}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ContentCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, CardImage, CardLink, CardTitle, Paragraph } from './Card.styled';

const Card = ({ path, thumbnails, title, description }) => {
  return (
    <CardLink>
      <Link to={path}>
        <CardImage src={thumbnails} />
        <CardBody>
          <CardTitle as="h2">{title}</CardTitle>
          <Paragraph>{description}</Paragraph>
        </CardBody>
      </Link>
    </CardLink>
  );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, CardImage, CardLink, CardTitle, Paragraph } from './Card.styled';

const Card = ({ item, path }) => {
  return (
    <CardLink>
      <Link to={path}>
        <CardImage src={item.snippet.thumbnails.medium.url} />
        <CardBody>
          <CardTitle as="h2">{item.snippet.title}</CardTitle>
          <Paragraph>{item.snippet.description}</Paragraph>
        </CardBody>
      </Link>
    </CardLink>
  );
};

export default Card;

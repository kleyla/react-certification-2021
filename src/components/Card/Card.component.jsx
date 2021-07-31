import React from 'react';
import { CardBody, CardImage, CardLink, Typography } from './Card.styled';

export const Card = ({ item, onClick }) => {
  return (
    <CardLink onClick={onClick}>
      <CardImage src={item.snippet.thumbnails.medium.url} />
      <CardBody>
        <Typography as="h2">{item.snippet.title}</Typography>
        <Typography as="p">{item.snippet.description}</Typography>
      </CardBody>
    </CardLink>
  );
};

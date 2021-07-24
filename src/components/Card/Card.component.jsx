import React from 'react';
import { CardBody, CardContent, CardImage, CardLink, Typography } from './Card.styled';

export const Card = ({ item }) => {
  return (
    <CardContent>
      <CardLink>
        <CardImage src={item.snippet.thumbnails.default.url} />
        <CardBody>
          <Typography as="h2">{item.snippet.title}</Typography>
          <Typography as="p">{item.snippet.description}</Typography>
        </CardBody>
      </CardLink>
    </CardContent>
  );
};

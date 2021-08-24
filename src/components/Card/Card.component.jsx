import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, CardImage, CardLink, CardTitle, Paragraph } from './Card.styled';

const Card = ({ item, onClick }) => {
  console.log(item);
  return (
    <CardLink onClick={onClick}>
      <Link to={item.id.videoId ? `/video/${item.id.videoId}` : `/video/${item.id}`}>
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

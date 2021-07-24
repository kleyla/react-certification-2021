import React from 'react';
import data from '../../mocks/youtube.json';
import { Card } from '../Card/Card.component';
import { Container, Typography } from './CardsContainer.styled';

export const CardsContainer = () => {
  return (
    <Container>
      <Typography as="h2">Welcome to the Challenge!</Typography>
      <div>
        {data.items.map(
          (item) =>
            item.id.kind === 'youtube#video' && <Card key={item.id.videoId} item={item} />
        )}
      </div>
    </Container>
  );
};

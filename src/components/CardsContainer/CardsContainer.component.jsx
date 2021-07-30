import React from 'react';

import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
import { Card } from '../Card/Card.component';
import { Container, Loader, Typography } from './CardsContainer.styled';

export const CardsContainer = () => {
  const { videoList, loading } = useFetchVideos();

  return (
    <Container>
      <Typography as="h2">Welcome to the Challenge!</Typography>
      <div>
        {loading ? (
          <Loader />
        ) : (
          videoList.map(
            (item) =>
              item.id.kind === 'youtube#video' && (
                <Card key={item.id.videoId} item={item} />
              )
          )
        )}
      </div>
    </Container>
  );
};

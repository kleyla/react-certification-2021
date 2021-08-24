import React from 'react';

import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
import Card from '../Card';
import { Typography } from './Home.styled';

import { CardsContainer, Container, Loader } from '../UI';
// import data from '../../mocks/youtube.json';

const Home = () => {
  const { videoList, loading, error } = useFetchVideos();

  // const videoList = data.items;
  // const loading = false;

  return (
    <Container>
      <Typography as="h2">Welcome to the Challenge!</Typography>
      <CardsContainer>
        {loading ? (
          <Loader data-testid="loader" />
        ) : (
          videoList.map(
            (item) =>
              item.id.kind === 'youtube#video' && (
                <Card key={item.id.videoId} item={item} />
              )
          )
        )}
        {!loading && error && <span>{error}</span>}
      </CardsContainer>
    </Container>
  );
};

export default Home;

import React from 'react';
import { useFetchVideosById } from '../../utils/hooks/useFetchVideosById';
import Card from '../Card';
import { CardsContainer, Container, Loader } from '../UI';

const Favorites = () => {
  const { videos, loading } = useFetchVideosById();

  return (
    <Container>
      <CardsContainer subtitle="Mis favorites">
        {loading ? <Loader /> : videos.map((item) => <Card key={item} item={item} />)}
      </CardsContainer>
    </Container>
  );
};

export default Favorites;

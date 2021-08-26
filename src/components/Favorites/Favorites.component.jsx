import React from 'react';

import { useFavorites } from '../../utils/hooks/useFavorites';
import Card from '../Card';
import { CardsContainer, Container, Loader } from '../UI';

const Favorites = () => {
  const { favoriteVideos, isLoading } = useFavorites();

  return (
    <Container>
      <CardsContainer subtitle="My favorites">
        {isLoading ? (
          <Loader data-testid="loader" />
        ) : (
          favoriteVideos.map((item) => (
            <Card key={item} item={item} path={`/favorite/${item.id}`} />
          ))
        )}
      </CardsContainer>
    </Container>
  );
};

export default Favorites;

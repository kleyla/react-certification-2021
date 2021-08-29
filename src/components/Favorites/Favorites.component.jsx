import React from 'react';

import { useFavorites } from '../../utils/hooks/useFavorites';
import Card from '../Card';
import { CardsContainer, Container, Loader } from '../UI';

const Favorites = () => {
  const { favorites, isLoading } = useFavorites();

  return (
    <Container>
      <CardsContainer subtitle="My favorites">
        {isLoading ? (
          <Loader data-testid="loader" />
        ) : (
          favorites.map((item) => (
            <Card
              key={item.id}
              thumbnails={item.thumbnails}
              title={item.title}
              description={item.description}
              path={`/favorite/${item.id}`}
            />
          ))
        )}
      </CardsContainer>
    </Container>
  );
};

export default Favorites;

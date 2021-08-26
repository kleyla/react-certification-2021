import React from 'react';

import { useFavorites } from '../../utils/hooks/useFavorites';
import Card from '../Card';
import { CardsContainer, Container, Loader, Typography } from '../UI';

const Favorites = () => {
  const { favoriteVideos, isLoading, errorMessage } = useFavorites();

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
        {errorMessage && (
          <Typography tagName="span" className="text-error">
            {errorMessage}
          </Typography>
        )}
      </CardsContainer>
    </Container>
  );
};

export default Favorites;

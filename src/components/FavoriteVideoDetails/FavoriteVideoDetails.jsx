import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useFavorites } from '../../utils/hooks/useFavorites';
import {
  Button,
  Container,
  Grid,
  GridItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemBody,
  Loader,
  Typography,
} from '../UI';

const FavoriteVideoDetails = () => {
  const { id } = useParams();
  const { removeFavorite, isFavorite, favorites, videoSelected, isLoading } =
    useFavorites(id);

  const remove = () => {
    removeFavorite(id);
  };

  return (
    <Container>
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : (
        <>
          <Grid container>
            <GridItem xs={12} md={8}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                title="video"
                width="100%"
                height="600px"
              />
              {isFavorite(id) && (
                <Button icon color="success" onClick={remove} className="mb-2">
                  <i className="fas fa-star fa-lg" />
                </Button>
              )}
              {videoSelected && (
                <>
                  <Typography tagName="h2" className="mb-1" weight="600">
                    {videoSelected.title}
                  </Typography>
                  <Typography tagName="p">{videoSelected.description}</Typography>
                </>
              )}
            </GridItem>
            <GridItem xs={12} md={4}>
              <List>
                {favorites.map((item) => (
                  <Link key={item.id} to={`/favorite/${item.id}`}>
                    <ListItem type="button">
                      <ListItemAvatar src={item.thumbnails} alt={item.title} />
                      <ListItemBody>
                        <Typography tagName="h5">{item.title}</Typography>
                        <Typography tagName="p" tiny="true">
                          {item.channel}
                        </Typography>
                      </ListItemBody>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </GridItem>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default FavoriteVideoDetails;

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
  const {
    addFavorite,
    removeFavorite,
    isFavorite,
    favoriteVideos,
    videoSelected,
    isLoading,
  } = useFavorites(id);

  return (
    <Container>
      {isLoading ? (
        <Loader />
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
              {isFavorite(id) ? (
                <Button
                  icon
                  color="success"
                  onClick={() => removeFavorite(id)}
                  className="mb-2"
                >
                  <i className="fas fa-star fa-lg" />
                </Button>
              ) : (
                <Button color="info" onClick={() => addFavorite(id)} className="mb-2">
                  <span>Add favorite</span>
                  <i className="fas fa-star fa-lg" />
                </Button>
              )}
              {videoSelected && (
                <>
                  <Typography tagName="h2" className="mb-1" weight="600">
                    {videoSelected.snippet.title}
                  </Typography>
                  <Typography tagName="p">{videoSelected.snippet.description}</Typography>
                </>
              )}
            </GridItem>
            <GridItem xs={12} md={4}>
              <List>
                {favoriteVideos.map((item) => (
                  <Link key={item.id} to={`/favorite/${item.id}`}>
                    <ListItem type="button">
                      <ListItemAvatar
                        src={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                      />
                      <ListItemBody>
                        <Typography tagName="h5">{item.snippet.title}</Typography>
                        <Typography tagName="p" tiny>
                          {item.snippet.channelTitle}
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

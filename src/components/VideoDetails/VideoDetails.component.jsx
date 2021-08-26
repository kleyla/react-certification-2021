import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { useFavorites } from '../../utils/hooks/useFavorites';
import { useFetchVideoById } from '../../utils/hooks/useFetchVideoById';
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

const VideoDetails = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const { videoList } = state;
  const { video, loading } = useFetchVideoById(id);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <Container>
      {loading ? (
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
              <Typography tagName="h2" className="mb-1" weight="600">
                {video.snippet.title}
              </Typography>
              <Typography tagName="p">{video.snippet.description}</Typography>
            </GridItem>
            <GridItem xs={12} md={4}>
              <List>
                {videoList.map((item) => (
                  <Link key={item.id.videoId} to={`/video/${item.id.videoId}`}>
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

export default VideoDetails;

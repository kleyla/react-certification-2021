import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { useFetchVideoById } from '../../utils/hooks/useFetchVideoById';
import { Button, Container, Loader } from '../UI';
import {
  Grid,
  GridItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemBody,
  Typography,
} from './VideoDetails.styled';

const VideoDetails = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const { videoList } = state;
  const { video, loading } = useFetchVideoById(id);

  const handleFavorite = () => {
    localStorage.getItem('favorites');
  };

  return (
    <Container>
      {loading ? (
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
              <Button color="info" onClick={handleFavorite}>
                <span>Add favorite</span>
                <i className="fas fa-star fa-lg" />
              </Button>
              <Typography as="h2">{video.snippet.title}</Typography>
              <p>{video.snippet.description}</p>
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
                        <h5>{item.snippet.title}</h5>
                        <p>{item.snippet.channelTitle}</p>
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

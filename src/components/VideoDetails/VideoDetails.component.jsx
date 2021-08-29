import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../../context/appContext';

import { useFavorites } from '../../utils/hooks/useFavorites';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
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
  const { isAuthenticated } = state;

  const { videos, loading, error, videoSelected } = useFetchVideos(id);
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
              {isAuthenticated &&
                videoSelected.snippet &&
                (isFavorite(id) ? (
                  <Button
                    icon
                    color="success"
                    onClick={() => removeFavorite(id)}
                    className="mb-1"
                  >
                    <i className="fas fa-star fa-lg" />
                  </Button>
                ) : (
                  <Button
                    color="info"
                    onClick={() =>
                      addFavorite(
                        id,
                        videoSelected.snippet.title,
                        videoSelected.snippet.description,
                        videoSelected.snippet.thumbnails.medium.url,
                        videoSelected.snippet.channelTitle
                      )
                    }
                    className="mb-1"
                  >
                    <span>Add favorite</span>
                    <i className="fas fa-star fa-lg" />
                  </Button>
                ))}
              {videoSelected.snippet && (
                <>
                  <Typography tagName="h2" className="mb-1 mt-1" weight="600">
                    {videoSelected.snippet.title}
                  </Typography>
                  <Typography tagName="p">{videoSelected.snippet.description}</Typography>
                </>
              )}
            </GridItem>
            <GridItem xs={12} md={4}>
              <List>
                {videos.map((item) => (
                  <Link key={item.id.videoId} to={`/video/${item.id.videoId}`}>
                    <ListItem type="button">
                      <ListItemAvatar
                        src={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                      />
                      <ListItemBody>
                        <Typography tagName="h5">{item.snippet.title}</Typography>
                        <Typography tagName="p" tiny="true">
                          {item.snippet.channelTitle}
                        </Typography>
                      </ListItemBody>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </GridItem>
          </Grid>
          {error && (
            <Typography tagName="p" className="text-error">
              {error}
            </Typography>
          )}
        </>
      )}
    </Container>
  );
};

export default VideoDetails;

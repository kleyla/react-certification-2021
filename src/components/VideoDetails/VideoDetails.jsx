import React from 'react';
import {
  Grid,
  GridItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemBody,
  Typography,
} from './VideoDetails.styled';

export const VideoDetails = ({ video, videoList = [], selectVideo }) => {
  const { id, snippet } = video;
  return (
    <Grid container>
      <GridItem xs={12} md={8}>
        <iframe
          src={`https://www.youtube.com/embed/${id.videoId}`}
          frameBorder="0"
          title="video"
          width="100%"
          height="600px"
        />
        <Typography as="h2">{snippet.title}</Typography>
        <p>{snippet.description}</p>
      </GridItem>
      <GridItem xs={12} md={4}>
        <List>
          {videoList.map((item) => (
            <ListItem
              key={item.id.videoId}
              type="button"
              onClick={() => selectVideo(item)}
            >
              <ListItemAvatar
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <ListItemBody>
                <h5>{item.snippet.title}</h5>
                <p>{item.snippet.channelTitle}</p>
              </ListItemBody>
            </ListItem>
          ))}
        </List>
      </GridItem>
    </Grid>
  );
};

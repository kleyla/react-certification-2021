import React, { useContext, useState } from 'react';

import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
import Card from '../Card';
import VideoDetails from '../VideoDetails';
import {
  Container,
  Loader,
  Typography,
  VideoList,
  VideoListContainer,
} from './CardsContainer.styled';
import { AppContext } from '../../context/appContext';
import { types } from '../../types/types';

const CardsContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { showVideoDetails } = state;
  const { videoList, loading } = useFetchVideos();
  const [videoSelected, setVideoSelected] = useState({});

  const selectVideo = (video) => {
    setVideoSelected(video);
    if (!showVideoDetails) {
      dispatch({
        type: types.showVideoDetails,
      });
    }
  };

  return (
    <Container>
      {showVideoDetails ? (
        <VideoDetails
          video={videoSelected}
          videoList={videoList}
          selectVideo={selectVideo}
        />
      ) : (
        <VideoListContainer>
          <Typography as="h2">Welcome to the Challenge!</Typography>
          <VideoList>
            {loading ? (
              <Loader data-testid="loader" />
            ) : (
              videoList.map(
                (item) =>
                  item.id.kind === 'youtube#video' && (
                    <Card
                      key={item.id.videoId}
                      item={item}
                      onClick={() => selectVideo(item)}
                    />
                  )
              )
            )}
          </VideoList>
        </VideoListContainer>
      )}
    </Container>
  );
};

export default CardsContainer;

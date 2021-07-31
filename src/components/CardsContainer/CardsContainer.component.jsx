import React, { useContext, useState } from 'react';

import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
import { Card } from '../Card/Card.component';
import { VideoDetails } from '../VideoDetails/VideoDetails';
import {
  Container,
  Loader,
  Typography,
  VideoList,
  VideoListContainer,
} from './CardsContainer.styled';
// import datos from '../../mocks/youtube.json';
import { AppContext } from '../../context/appContext';
import { types } from '../../types/types';

export const CardsContainer = () => {
  const { data, dispatch } = useContext(AppContext);
  const { showVideoDetails } = data;
  const { videoList, loading } = useFetchVideos();
  const [videoSelected, setVideoSelected] = useState({});
  // const loading = false;
  // const videoList = datos.items;

  const selectVideo = (video) => {
    // console.log(video.id.videoId);
    setVideoSelected(video);
    // setShowVideoDetails(true);
    if (!showVideoDetails) {
      console.log('showVideoDetails', showVideoDetails);
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
              <Loader />
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

import React from 'react';
import { VideoList, VideoListContainer } from './CardsContainer.styled';

const CardsContainer = (props) => {
  return (
    <VideoListContainer {...props}>
      {props.subtitle && <h3>{props.subtitle}</h3>}
      <VideoList>{props.children}</VideoList>
    </VideoListContainer>
  );
};

export default CardsContainer;

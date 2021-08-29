import React from 'react';

import ShadowContainer from '../ShadowContainer';
import { ContainerLoader, LoaderCircle } from './Loader.styled';

const Loader = ({ children, ...otherProps }) => {
  return (
    <ShadowContainer>
      <ContainerLoader {...otherProps}>
        <LoaderCircle />
      </ContainerLoader>
    </ShadowContainer>
  );
};

export default Loader;

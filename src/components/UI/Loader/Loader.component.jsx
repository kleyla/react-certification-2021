import React from 'react';
import ReactDOM from 'react-dom';

import { ContainerLoader, LoaderCircle, ShadowContainer } from './Loader.styled';

const Loader = ({ children, ...otherProps }) => {
  return ReactDOM.createPortal(
    <>
      <ShadowContainer />
      <ContainerLoader {...otherProps}>
        <LoaderCircle />
      </ContainerLoader>
    </>,
    document.getElementById('modal-root')
  );
};

export default Loader;

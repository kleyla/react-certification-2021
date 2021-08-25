import React from 'react';
import { ContainerLoader, LoaderCircle } from './Loader.styled';

const Loader = (props) => {
  return (
    <ContainerLoader>
      <LoaderCircle {...props} />
    </ContainerLoader>
  );
};

export default Loader;

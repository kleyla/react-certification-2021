import React from 'react';
import ReactDOM from 'react-dom';
import { ShadowContainerStyled } from './ShadowContainer.styled';

const ShadowContainer = ({ children, ...otherProps }) => {
  return ReactDOM.createPortal(
    <>
      <ShadowContainerStyled {...otherProps} />
      {children}
    </>,
    document.getElementById('modal-root')
  );
};

export default ShadowContainer;

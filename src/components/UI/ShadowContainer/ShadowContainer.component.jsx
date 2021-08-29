import React from 'react';
import ReactDOM from 'react-dom';
import { ShadowStyled } from './ShadowContainer.styled';

const ShadowContainer = ({ children, ...otherProps }) => {
  return ReactDOM.createPortal(
    <>
      <ShadowStyled {...otherProps} />
      {children}
    </>,
    document.getElementById('modal-root')
  );
};

export default ShadowContainer;

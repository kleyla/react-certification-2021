import React from 'react';
import ShadowContainer from '../ShadowContainer';
import { ModalStyled } from './Modal.styled';

const Modal = (props) => {
  const { setOpen } = props;

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <ShadowContainer onClick={close}>
        <ModalStyled {...props}>{props.children}</ModalStyled>
      </ShadowContainer>
    </>
  );
};

export default Modal;

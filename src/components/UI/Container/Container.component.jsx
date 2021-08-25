import React from 'react';
import { ContainerStyled } from './Container.styled';

const Container = (props) => {
  return (
    <ContainerStyled {...props}>
      <div>{props.children}</div>
    </ContainerStyled>
  );
};

export default Container;

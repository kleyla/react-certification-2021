import React from 'react';
import { GridStyled } from './Grid.styled';

const Grid = (props) => {
  return <GridStyled {...props}>{props.children}</GridStyled>;
};

export default Grid;

import React from 'react';
import { GridItemStyled } from './GridItem.styled';

const GridItem = (props) => {
  return <GridItemStyled {...props}>{props.children}</GridItemStyled>;
};

export default GridItem;

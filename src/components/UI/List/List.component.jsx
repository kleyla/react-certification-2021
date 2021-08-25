import React from 'react';
import { ListStyled } from './List.styled';

const List = (props) => {
  return <ListStyled {...props}>{props.children}</ListStyled>;
};

export default List;

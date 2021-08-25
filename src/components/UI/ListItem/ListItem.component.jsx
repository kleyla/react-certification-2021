import React from 'react';
import { ListItemStyled } from './ListItem.styled';

const ListItem = (props) => {
  return <ListItemStyled {...props}>{props.children}</ListItemStyled>;
};

export default ListItem;

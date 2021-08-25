import React from 'react';
import { ListItemBodyStyled } from './ListItemBody.styled';

const ListItemBody = (props) => {
  return <ListItemBodyStyled {...props}>{props.children}</ListItemBodyStyled>;
};

export default ListItemBody;

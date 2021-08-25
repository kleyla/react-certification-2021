import React from 'react';
import { ListItemAvatarStyled } from './ListItemAvatar.styled';

const ListItemAvatar = (props) => {
  return <ListItemAvatarStyled {...props}>{props.children}</ListItemAvatarStyled>;
};

export default ListItemAvatar;

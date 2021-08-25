import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = (props) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

export default Button;

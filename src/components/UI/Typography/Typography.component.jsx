import React from 'react';
import { TypographyStyled } from './Typography.styled';

const Typography = (props) => {
  return <TypographyStyled {...props}>{props.children}</TypographyStyled>;
};

export default Typography;

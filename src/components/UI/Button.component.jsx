import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  border: none;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  > span {
    margin-right: 8px;
    margin-left: 8px;
  }

  ${({ full }) => full && `width: 100%;`}

  ${({ icon }) =>
    icon &&
    `height: 48px;
        width: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;`}

  ${(props) => {
    if (props.color === 'primary') return `background-color: ${props.theme.btn.primary};`;
    if (props.color === 'info') return `background-color: ${props.theme.btn.info};`;
    if (props.color === 'success') return `background-color: ${props.theme.btn.success};`;
  }}

  ${(props) => {
    if (props.size === 'small') return `font-size: 10px;`;
    if (props.size === 'medium') return ``;
    if (props.size === 'large') return `padding: 14px; font-size: 16px;`;
  }}

  &:hover {
    ${({ icon }) =>
      icon && `background-color: rgba(255, 255, 255, 0.15); box-shadow: none;`}

    ${({ icon, theme }) => !icon && `box-shadow: ${theme.card.btnShadow};`}

    transform: translateY(-1px);

    ${({ header }) =>
      header && `background-color: rgba(255, 255, 255, 0.15); box-shadow: none;`}
  }
`;

export default Button;

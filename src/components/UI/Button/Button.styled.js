import styled from 'styled-components';

export const ButtonStyled = styled.button`
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
    switch (props.color) {
      case 'primary':
        return `background-color: ${props.theme.btn.primary};`;
      case 'info':
        return `background-color: ${props.theme.btn.info};`;
      case 'success':
        return `background-color: ${props.theme.btn.success};`;
      default:
        break;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case 'small':
        return `font-size: 10px;`;
      case 'medium':
        return;
      case 'large':
        return `padding: 14px; font-size: 16px;`;
      default:
        break;
    }
  }}

  &:hover {
    ${({ icon, theme }) => !icon && `box-shadow: ${theme.card.btnShadow};`}

    transform: translateY(-1px);

    ${({ header }) =>
      header && `background-color: rgba(255, 255, 255, 0.15); box-shadow: none;`}
  }
`;

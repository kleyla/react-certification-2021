import styled from 'styled-components';

export const CardLogin = styled.div`
  background-color: ${(props) => props.theme.card.background};
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  outline: 0;
  width: 460px;
  height: 400px;
  max-height: 440px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  margin-top: 24px;
`;
export const CardHeader = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 16px 0;
  text-transform: uppercase;
  font-weight: 500;

  ${(props) => props.active && `background-color: ${props.theme.headerBg}; color: #fff;`}

  &:hover {
    background-color: ${(props) => props.theme.card.hover};
    color: ${(props) => props.theme.card.headerHoverText};
  }
`;

export const CardContent = styled.div`
  padding: 0 24px 24px 24px;
`;

export const TextError = styled.div`
  color: red;
  font-size: 12px;
  text-align: center;
  margin-bottom: 16px;
`;
export const TextLabel = styled.label`
  color: ${(props) => props.theme.color};
  font-weight: 400;
`;

export const TextField = styled.input`
  outline: 0;
  width: 100%;
  padding: 12px 20px;
  margin: 4px 0 24px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: inherit;
  background: transparent;
  font-weight: 400;

  &:focus {
    border: 2px solid ${(props) => props.theme.btn.primary};
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.btn.primary};
  }
`;

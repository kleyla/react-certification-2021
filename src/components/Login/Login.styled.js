import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  padding-top: 48px;
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
`;

export const CardLogin = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  padding: 24px;
  outline: 0;
  width: 445px;
  height: 330px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const CardTitle = styled.h2`
  text-align: center;
  padding-bottom: 16px;
`;

export const TextLabel = styled.label`
  color: ${(props) => props.theme.color};
  font-weight: 400;
`;

export const TextField = styled.input`
  outline: 0;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: inherit;
  background: transparent;
  font-weight: 400;

  &:focus {
    border: 2px solid ${(props) => props.theme.btn};
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.btn};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.btn};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 16px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
`;

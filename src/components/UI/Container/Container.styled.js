import styled from 'styled-components';

export const ContainerStyled = styled.div`
  background-color: ${(props) => props.theme.body};
  padding-top: 30px;
  min-height: calc(100vh - 64px);

  > div {
    ${({ center }) => center && `display: flex; justify-content: center;`}
  }
`;

import styled from 'styled-components';

export const GridStyled = styled.div`
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

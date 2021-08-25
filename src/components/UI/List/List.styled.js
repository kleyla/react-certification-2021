import styled from 'styled-components';

export const ListStyled = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
`;

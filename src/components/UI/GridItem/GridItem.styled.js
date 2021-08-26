import styled from 'styled-components';

export const GridItemStyled = styled.div`
  @media only screen and (max-width: 960px) {
    ${({ xs }) => {
      if (xs === 12) return `width: 100%;`;
    }}
  }

  @media only screen and (min-width: 960px) {
    ${({ md }) => {
      switch (md) {
        case 8:
          return `width: 70%`;
        case 4:
          return `width: 30%; margin-left: 24px;`;
        default:
          break;
      }
    }}
  }
`;

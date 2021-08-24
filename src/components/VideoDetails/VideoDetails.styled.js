import styled from 'styled-components';

export const Grid = styled.div`
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const GridItem = styled.div`
  @media only screen and (max-width: 960px) {
    ${({ xs }) => {
      if (xs === 12) return `width: 100%;`;
    }}
  }

  @media only screen and (min-width: 960px) {
    ${({ md }) => {
      if (md === 8) return `width: 70%`;
    }}

    ${({ md }) => {
      if (md === 4) return `width: 30%; margin-left: 24px;`;
    }}
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: ${(props) => props.theme.card.hover};
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const ListItemAvatar = styled.img`
  width: 120px;
  height: 80px;
  display: block;
  background-size: cover;
  background-position: center;
`;

export const ListItemBody = styled.div`
  margin-left: 16px;
  > h5 {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  > p {
    font-size: 12px;
    color: ${(props) => props.theme.textTiny};
  }
`;

export const Typography = styled.p`
  margin: 20px 0;
  ${({ as }) => {
    if (as === 'h2') return `font-weight: 500;`;
  }}
`;

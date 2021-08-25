import styled from 'styled-components';

export const ListItemStyled = styled.div`
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

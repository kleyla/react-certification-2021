import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  top: 20%;
  left: calc(50% - 250px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.card.background};
  padding: 24px;
  border-radius: 4px;
`;

import styled, { keyframes } from 'styled-components';

export const ContainerLoader = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
export const LoaderCircle = styled.div`
  border: 8px solid ${(props) => props.theme.headerBg};
  border-top: 8px solid #ccc;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 2s linear infinite;
`;

import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
export const ContainerLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderCircle = styled.div`
  border: 8px solid ${(props) => props.theme.headerBg};
  border-top: 8px solid #ccc;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 2s linear infinite;
`;

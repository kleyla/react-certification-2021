import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  padding-top: 30px;
  min-height: calc(100vh - 64px);
`;
export const VideoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const VideoList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin: 0px auto;
  box-sizing: border-box;

  @media only screen and (min-width: 0px) {
    width: 100%;
    justify-content: center;
  }
  @media only screen and (min-width: 770px) {
    width: 770px;
  }
  @media only screen and (min-width: 1135px) {
    width: 1135px;
  }
  @media only screen and (min-width: 1500px) {
    width: 1500px;
  }
`;

export const Typography = styled.p`
  text-align: center;
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
  padding: 12px;
  color: ${(props) => props.theme.color};
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 8px solid ${(props) => props.theme.headerBg};
  border-top: 8px solid #ccc;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 2s linear infinite;
`;

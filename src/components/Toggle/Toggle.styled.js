import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  > input {
    display: none;
  }
`;

export const SliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #1e1e2f;
  border-radius: 25px;
  top: 5px;
  bottom: 5px;
  right: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: -5px;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;

    ${({ dark }) => dark && `transform: translateX(25px);`}
  }
`;
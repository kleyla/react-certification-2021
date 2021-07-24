import styled from 'styled-components';

export const CardContent = styled.div`
  width: 345px;
  min-height: 345px;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const CardLink = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

export const CardImage = styled.div`
  display: block;
  width: 100%;
  height: 140px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Typography = styled.p`
  text-align: left;
  margin-bottom: 0.35em;
`;

export const CardBody = styled.div`
  padding: 16px;
`;
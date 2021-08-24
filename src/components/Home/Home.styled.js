import styled from 'styled-components';

export const Typography = styled.p`
  text-align: center;
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
  padding: 12px;
  color: ${(props) => props.theme.color};
`;

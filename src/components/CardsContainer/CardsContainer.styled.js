import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  > div {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    /* padding: 20px; */
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
  }
`;

export const Typography = styled.p`
  text-align: center;
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
  padding: 12px;
  padding-top: 30px;
`;

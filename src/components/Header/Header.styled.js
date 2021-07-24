import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: #1c5476;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  min-height: 64px;
`;

export const MenuItem = styled.li`
  padding: 12px;
  cursor: pointer;

  > i {
    color: #fff;
    font-size: 1.5rem;
    margin-right: 16px;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Form = styled.form`
  width: 248px;
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.15);
  height: 35px;
  border-radius: 4px;
`;

export const ButtonIcon = styled.button`
  position: absolute;
  left: 0;
  height: 100%;
  background: transparent;
  padding: 0px 16px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

  > i {
    width: 16px;
    height: auto;
  }
`;

export const TextField = styled.input`
  position: absolute;
  left: 48px;
  top: 0;
  outline: 0;
  color: inherit;
  color: #fff;
  background: transparent;
  width: 200px;
  height: 100%;
  border: 0;
  font-size: 16px;
`;

export const HiddenDown = styled.div`
  @media only screen and (max-width: 600px) {
    ${({ on }) => {
      if (on === 'sm') return `display: none; background: red;`;
    }}
  }
  @media only screen and (max-width: 960px) {
    ${({ on }) => {
      if (on === 'md') return `display: none; background: green;`;
    }}
  }
  @media only screen and (max-width: 1280px) {
    ${({ on }) => {
      if (on === 'lg') return `display: none; background: yellow;`;
    }}
  }
`;
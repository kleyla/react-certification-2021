import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: ${(props) => props.theme.headerBg};
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  height: 64px;

  ${({ column }) =>
    column &&
    `flex-direction: column;
      align-items: flex-start;
      padding: 0;
      height: auto;
      white-space: nowrap;
    `}

  > a {
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
`;

export const MenuItem = styled.li`
  margin: 0 12px;
  cursor: pointer;
  position: relative;

  ${({ dropdown }) =>
    dropdown && `position: relative; margin: 0; padding 8px 16px; width: 100%;`}

  ${({ noLink }) => noLink && `cursor: auto; text-transform: uppercase; font-size: 10px;`}

  > i {
    color: #fff;
    font-size: 1.5rem;
    margin-right: 16px;
  }

  &:hover {
    ${(props) =>
      props.dropdown && !props.noLink && `background-color: ${props.theme.card.hover};`}
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

export const ButtonIconInput = styled.button`
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
      if (on === 'sm') return `display: none;`;
    }}
  }
  @media only screen and (max-width: 960px) {
    ${({ on }) => {
      if (on === 'md') return `display: none;`;
    }}
  }
  @media only screen and (max-width: 1280px) {
    ${({ on }) => {
      if (on === 'lg') return `display: none;`;
    }}
  }
`;

export const Dropdown = styled.div`
  min-width: 12rem;
  height: auto;
  background-color: ${(props) => props.theme.card.background};
  border-radius: 4px;
  position: absolute;
  top: 42px;
  right: 0;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  padding: 8px 0;
  color: ${(props) => props.theme.color};
`;

import React, { useContext, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { types } from '../../types/types';
import Toggle from '../Toggle';
import {
  ButtonIconInput,
  Dropdown,
  Form,
  HiddenDown,
  Menu,
  MenuItem,
  Navbar,
  Spacer,
  TextField,
} from './Header.styled';
import { Button } from '../UI';
import { useOutsideClick } from '../../utils/hooks/useOutsideClick';
import { useAuth } from '../../utils/hooks/useAuth';

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState(state.search);
  const [dropdown, setDropdown] = useState(false);
  const { isAuthenticated } = state;
  const history = useHistory();
  const { logout } = useAuth();
  const ref = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchInput) {
      console.log('empty');
      return;
    }
    dispatch({
      type: types.search,
      payload: {
        search: searchInput,
      },
    });
    history.push('/');
  };

  const handleToggle = () => {
    dispatch({
      type: types.theme,
    });
  };

  const handleDropdown = () => {
    setDropdown((value) => !value);
  };

  useOutsideClick(ref, () => {
    if (dropdown) setDropdown(() => false);
  });

  return (
    <Navbar>
      <Menu>
        <MenuItem>
          <Button icon header>
            <i className="fas fa-bars fa-2x" />
          </Button>
        </MenuItem>
        <MenuItem>
          <Form onSubmit={handleSearch}>
            <ButtonIconInput type="submit">
              <i className="fas fa-search fa-lg" />
            </ButtonIconInput>
            <TextField
              placeholder="Search"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch}
            />
          </Form>
        </MenuItem>
        <Spacer />
        <HiddenDown on="md">
          <MenuItem>
            <Toggle text="Dark mode" checked={state.theme} setChecked={handleToggle} />
          </MenuItem>
        </HiddenDown>
        <HiddenDown on="md">
          <MenuItem>
            <Button onClick={handleDropdown} header icon={!isAuthenticated}>
              <i className="fas fa-user-circle fa-2x" />
              {isAuthenticated && <span>{state.auth.email}</span>}
            </Button>
            {dropdown && (
              <Dropdown ref={ref}>
                <Menu column>
                  {isAuthenticated ? (
                    <>
                      <MenuItem dropdown noLink>
                        Welcome!
                      </MenuItem>
                      <Link to="/favorites">
                        <MenuItem dropdown>Favorites</MenuItem>
                      </Link>
                      <MenuItem dropdown onClick={logout}>
                        Log out
                      </MenuItem>
                    </>
                  ) : (
                    <Link to="/login">
                      <MenuItem dropdown>Log in</MenuItem>
                    </Link>
                  )}
                </Menu>
              </Dropdown>
            )}
          </MenuItem>
        </HiddenDown>
      </Menu>
    </Navbar>
  );
};

export default Header;

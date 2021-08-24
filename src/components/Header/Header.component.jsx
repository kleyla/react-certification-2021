import React, { useContext, useState } from 'react';
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
import { firebase } from '../../firebase/firebase.config';
import { Button } from '../UI';

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState(state.search);
  const [dropdown, setDropdown] = useState(false);
  const { isAuthenticated } = state;
  const history = useHistory();

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

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: types.logout,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar>
      <Menu>
        <MenuItem>
          <Button icon>
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
              <Dropdown>
                <Menu column>
                  {isAuthenticated ? (
                    <>
                      <MenuItem dropdown noLink>
                        Welcome!
                      </MenuItem>
                      <Link to="/favorites">
                        <MenuItem dropdown>Favoritos</MenuItem>
                      </Link>
                      <MenuItem dropdown onClick={handleLogout}>
                        Logout
                      </MenuItem>
                    </>
                  ) : (
                    <Link to="/login">
                      <MenuItem dropdown>Iniciar session</MenuItem>
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

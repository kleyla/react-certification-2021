import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { types } from '../../types/types';
import { Toggle } from '../Toggle/Toggle.component';
import {
  ButtonIcon,
  ButtonIconInput,
  Form,
  HiddenDown,
  Menu,
  MenuItem,
  Navbar,
  Spacer,
  TextField,
} from './Header.styled';

export const Header = () => {
  const { data, dispatch } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState(data.search);
  const [checked, setChecked] = useState(true);

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchInput) {
      console.log('vacio');
      return;
    }
    dispatch({
      type: types.search,
      payload: {
        search: searchInput,
      },
    });
  };

  return (
    <Navbar>
      <Menu>
        <MenuItem>
          <ButtonIcon>
            <i className="fas fa-bars fa-lg" />
          </ButtonIcon>
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
            />
          </Form>
        </MenuItem>
        <Spacer />
        <HiddenDown on="md">
          <MenuItem>
            <Toggle text="Dark mode" checked={checked} setChecked={setChecked} />
          </MenuItem>
        </HiddenDown>
        <HiddenDown on="md">
          <MenuItem>
            <ButtonIcon>
              <i className="fas fa-user-circle fa-3x" />
            </ButtonIcon>
          </MenuItem>
        </HiddenDown>
      </Menu>
    </Navbar>
  );
};

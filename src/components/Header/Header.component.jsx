import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { types } from '../../types/types';
import Toggle from '../Toggle';
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

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState(state.search);
  const [checked, setChecked] = useState(true);

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
    if (state.showVideoDetails) {
      dispatch({
        type: types.showVideoList,
      });
    }
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
              onKeyPress={(e) => e.key === 'Enter' && handleSearch}
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

export default Header;

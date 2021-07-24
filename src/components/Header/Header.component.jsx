import React, { useState } from 'react';
import { Toggle } from '../Toggle/Toggle.component';
import {
  ButtonIcon,
  Form,
  HiddenDown,
  Menu,
  MenuItem,
  Navbar,
  Spacer,
  TextField,
} from './Header.styled';

export const Header = () => {
  const [search, setSearch] = useState('wizeline');
  const [checked, setChecked] = useState(true);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <Navbar>
      <Menu>
        <MenuItem>
          <i className="fas fa-bars fa-lg" />
        </MenuItem>
        <MenuItem>
          <Form onSubmit={handleSearch}>
            <ButtonIcon type="submit">
              <i className="fas fa-search fa-lg" />
            </ButtonIcon>
            <TextField
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
            <i className="fas fa-user-circle fa-lg" />
          </MenuItem>
        </HiddenDown>
      </Menu>
    </Navbar>
  );
};

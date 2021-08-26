import React from 'react';
import { Typography } from '../UI';
import { SliderRound, ToggleContainer, ToggleSwitch } from './Toggle.styled';

const Toggle = ({ text, checked, setChecked }) => {
  return (
    <ToggleContainer>
      <Typography tagName="p" className="mr-1" header="true">
        {text}
      </Typography>
      <ToggleSwitch>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          data-testid="toggle"
        />
        <SliderRound dark={checked} />
      </ToggleSwitch>
    </ToggleContainer>
  );
};

export default Toggle;

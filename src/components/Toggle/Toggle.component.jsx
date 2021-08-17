import React from 'react';
import { SliderRound, ToggleContainer, ToggleSwitch, Typography } from './Toggle.styled';

const Toggle = ({ text, checked, setChecked }) => {
  return (
    <ToggleContainer>
      <Typography>{text}</Typography>
      <ToggleSwitch>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <SliderRound dark={checked} />
      </ToggleSwitch>
    </ToggleContainer>
  );
};

export default Toggle;

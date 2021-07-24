import React from 'react';
import { SliderRound, ToggleContainer, ToggleSwitch, Typography } from './Toggle.styled';

export const Toggle = ({ text, checked, setChecked }) => {
  return (
    <ToggleContainer>
      <ToggleSwitch>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <SliderRound dark={checked} />
      </ToggleSwitch>
      <Typography>{text}</Typography>
    </ToggleContainer>
  );
};

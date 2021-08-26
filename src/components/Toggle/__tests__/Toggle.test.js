import React from 'react';
import { render } from '@testing-library/react';
import Toggle from '../index';

describe('Testing Toggle component', () => {
  const checked = true;
  const setChecked = jest.fn();

  const tree = render(
    <Toggle text="Dark mode" checked={checked} setChecked={setChecked} />
  );

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});

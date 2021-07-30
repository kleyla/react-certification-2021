import React from 'react';
import renderer from 'react-test-renderer';
import { Toggle } from '../Toggle.component';

describe('Testing Toggle component', () => {
  const checked = true;
  const setChecked = jest.fn();

  const tree = renderer
    .create(<Toggle text="Dark mode" checked={checked} setChecked={setChecked} />)
    .toJSON();

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});

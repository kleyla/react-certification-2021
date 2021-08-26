import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import Toggle from '../index';

describe('Testing Toggle component', () => {
  const checked = true;
  const setChecked = jest.fn();
  let tree;

  beforeEach(() => {
    tree = render(<Toggle text="Dark mode" checked={checked} setChecked={setChecked} />);
  });

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should change the theme', () => {
    const element = screen.getByTestId('toggle');
    fireEvent.click(element);
    expect(setChecked).toHaveBeenCalledTimes(1);
  });
});

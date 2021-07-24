import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from '../../../components/Header/Header.component';

describe('Testing Header component', () => {
  const tree = renderer.create(<Header />).toJSON();

  it('should take a snapshop', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should be text "Dark mode"', () => {
    render(<Header />);
    expect(screen.queryByText(/Dark mode/)).toBeInTheDocument();
  });

  it('should change the input', () => {
    const header = render(<Header />);
    const input = header.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'hi' } });

    expect(input.value).toBe('hi');
  });
});

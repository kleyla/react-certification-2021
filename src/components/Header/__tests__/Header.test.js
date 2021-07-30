import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from '../Header.component';

describe('Testing Header component', () => {
  const tree = render(<Header />);

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

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '..';

describe('Testing App component', () => {
  const tree = render(<App />);

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should render any JSX', () => {
    render(<App />);
    expect(screen.getByText('Welcome to the Challenge!').tagName).toBe('H2');
  });
});

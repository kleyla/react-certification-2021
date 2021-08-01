import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from '../Header.component';
import { AppContext } from '../../../context/appContext';

describe('Testing Header component', () => {
  const contextValue = {
    dispatch: jest.fn(),
    state: {
      search: 'wizeline',
      showVideoDetails: false,
    },
  };

  beforeEach(() => {
    render(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
  });

  it('should take a snapshop', () => {
    expect(screen).toMatchSnapshot();
  });

  it('should be text "Dark mode"', () => {
    expect(screen.queryByText(/Dark mode/)).toBeInTheDocument();
  });

  it('should change the input', () => {
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'hi' } });

    expect(input.value).toBe('hi');
  });

  it('should change the input', () => {
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: '' } });

    expect(contextValue.dispatch).not.toHaveBeenCalled();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardsContainer } from '../CardsContainer.component';
import { AppContext } from '../../../context/appContext';

describe('Testing CardsContainer component', () => {
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
        <CardsContainer />
      </AppContext.Provider>
    );
  });

  it('should take a snapshop', () => {
    expect(screen).toMatchSnapshot();
  });

  // it('should ', async () => {
  //   await act(async () => {
  //     const { getByTestId } = screen;
  //     await waitForElementToBeRemoved(() => getByTestId('loader'));
  //     expect(screen.getByTestId('loader')).toBeFalsy();
  //   });
  // });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardsContainer } from '../CardsContainer.component';
import { AppContext } from '../../../context/appContext';

describe('Testing CardsContainer component', () => {
  it('should take a snapshop', () => {
    const contextValue = {
      dispatch: jest.fn(),
      data: {
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

    expect(screen).toMatchSnapshot();
  });
});

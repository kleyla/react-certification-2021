import React from 'react';
import { render } from '@testing-library/react';
import { CardsContainer } from '../CardsContainer.component';

describe('Testing CardsContainer component', () => {
  it('should take a snapshop', () => {
    const tree = render(<CardsContainer />);
    expect(tree).toMatchSnapshot();
  });
});

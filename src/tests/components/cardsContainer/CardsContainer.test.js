import React from 'react';
import renderer from 'react-test-renderer';
import { CardsContainer } from '../../../components/CardsContainer/CardsContainer.component';

describe('Testing CardsContainer component', () => {
  it('should take a snapshop', () => {
    const tree = renderer.create(<CardsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

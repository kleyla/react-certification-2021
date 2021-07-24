import React from 'react';
import renderer from 'react-test-renderer';

import { Card } from '../../../components/Card/Card.component';
import data from '../../../mocks/youtube.json';

describe('Testing Card component', () => {
  it('should take a snapshop', () => {
    const item = data.items[1];

    const tree = renderer.create(<Card item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

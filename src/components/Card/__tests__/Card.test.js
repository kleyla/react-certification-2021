import React from 'react';
import { render } from '@testing-library/react';

import { Card } from '../Card.component';
import data from '../../../mocks/youtube.json';

describe('Testing Card component', () => {
  it('should take a snapshop', () => {
    const item = data.items[1];

    const tree = render(<Card item={item} />);
    expect(tree).toMatchSnapshot();
  });
});

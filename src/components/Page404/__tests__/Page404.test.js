import React from 'react';
import { render } from '@testing-library/react';

import Page404 from '../Page404.component';

describe('Testing Page404 component', () => {
  let tree;

  beforeEach(() => {
    tree = render(<Page404 />);
  });

  it('should take a snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});

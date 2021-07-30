import React from 'react';
import renderer from 'react-test-renderer';
import App from '..';

describe('Testing App component', () => {
  const tree = renderer.create(<App />).toJSON();

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});

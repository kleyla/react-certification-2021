import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import App from '../index';

describe('Testing App component', () => {
  let tree;

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  beforeEach(() => {
    tree = render(<App />);
  });

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should render any JSX', () => {
    expect(tree.getByText('Welcome to the Challenge!').tagName).toBe('H2');
  });
});

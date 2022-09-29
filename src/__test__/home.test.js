import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Module/Home'

describe('snapshot test for Home Component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot('Home');
  });
});
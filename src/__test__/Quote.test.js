import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Module/Quote';

describe('snapshot test for Quote Component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot('Quote');
  });
});

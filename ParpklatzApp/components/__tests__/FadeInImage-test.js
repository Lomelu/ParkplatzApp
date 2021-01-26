import React from 'react';
import renderer from 'react-test-renderer';

import FadeInImage from '../FadeInImage';



it(`renders correctly`, () => {
  const tree = renderer.create(<FadeInImage 
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
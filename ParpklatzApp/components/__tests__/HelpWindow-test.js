import * as React from 'react';
import renderer from 'react-test-renderer';

import {Help} from '../HelpWindow';

it(`renders correctly`, () => {
  const tree = renderer.create(<Help/>).toJSON();

  expect(tree).toMatchSnapshot();
});


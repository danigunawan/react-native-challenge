import React from 'react';
import Loading from './Loading';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Loading />).toJSON();
  expect(rendered).toBeTruthy();
});

import React from 'react';
import { render } from '@testing-library/react';
import <%= appName %>  from './<%= appName %> ';

test('renders learn react link', () => {
  const { getByText } = render(<<%= appName %>  />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

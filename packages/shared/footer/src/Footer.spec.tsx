import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

test('renders footer', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/Footer/);
  expect(linkElement).toBeDefined();
});

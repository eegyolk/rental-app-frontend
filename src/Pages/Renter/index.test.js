import { render, screen } from '@testing-library/react';

import Renter from './index.js';

test('renders This is my renter page.', () => {
  render(<Renter />);
  const linkElement = screen.getByText(/This is my renter page./i);
  expect(linkElement).toBeInTheDocument();
});

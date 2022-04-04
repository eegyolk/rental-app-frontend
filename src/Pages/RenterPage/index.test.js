import { render, screen } from '@testing-library/react';

import RenterPage from './index.js';

test('renders This is my renter page.', () => {
  render(<RenterPage />);
  const linkElement = screen.getByText(/This is my renter page./i);
  expect(linkElement).toBeInTheDocument();
});

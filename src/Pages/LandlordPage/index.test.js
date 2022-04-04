import { render, screen } from '@testing-library/react';

import LandlordPage from './index.js';

test('renders This is my landlord page.', () => {
  render(<LandlordPage />);
  const linkElement = screen.getByText(/This is my landlord page./i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Landlord from './index.js';

test('renders This is my landlord page.', () => {
  render(<Landlord />);
  const linkElement = screen.getByText(/This is my landlord page./i);
  expect(linkElement).toBeInTheDocument();
});

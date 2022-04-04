import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import PropertyFeaturesAmenities from './index.js';

test('render PropertyFeaturesAmenities', () => {
  render(<PropertyFeaturesAmenities />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Feature/i);
  expect(linkElement).toBeInTheDocument();
});

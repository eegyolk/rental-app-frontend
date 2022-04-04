import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HomeNewPropertyListing from './index.js';

test('render HomeNewPropertyListing', () => {
  render(<HomeNewPropertyListing />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/New/i);
  expect(linkElement).toBeInTheDocument();
});

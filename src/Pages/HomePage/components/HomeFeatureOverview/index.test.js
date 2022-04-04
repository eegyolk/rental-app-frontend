import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HomeFeatureOverview from './index.js';

test('render HomeFeatureOverview', () => {
  render(<HomeFeatureOverview />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Balai/i);
  expect(linkElement).toBeInTheDocument();
});

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HomeBenefits from './index.js';

test('render HomeBenefits', () => {
  render(<HomeBenefits />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/How/i);
  expect(linkElement).toBeInTheDocument();
});

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HomeHero from './index.js';

test('render HomeHero', () => {
  render(<HomeHero />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Your/i);
  expect(linkElement).toBeInTheDocument();
});

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import PropertyMenu from './index.js';

test('render PropertyMenu', () => {
  render(<PropertyMenu />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Menu/i);
  expect(linkElement).toBeInTheDocument();
});

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Search from './index.js';

test('render Search', () => {
  render(<Search />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Filter/i);
  expect(linkElement).toBeInTheDocument();
});

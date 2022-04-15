import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import SearchByAreaOrProperty from './index.js';

test('render SearchByAreaOrProperty', () => {
  render(<SearchByAreaOrProperty />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Filter/i);
  expect(linkElement).toBeInTheDocument();
});

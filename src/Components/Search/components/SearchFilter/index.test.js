import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import SearchFilter from './index.js';

test('render SearchFilter', () => {
  render(<SearchFilter />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Filter/i);
  expect(linkElement).toBeInTheDocument();
});

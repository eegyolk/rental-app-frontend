import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import SearchResultItem from './index.js';

test('render SearchResultItem', () => {
  render(<SearchResultItem />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/The Loft/i);
  expect(linkElement).toBeInTheDocument();
});

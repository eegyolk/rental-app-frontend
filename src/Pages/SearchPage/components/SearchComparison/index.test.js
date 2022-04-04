import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import SearchComparison from './index.js';

test('render SearchComparison', () => {
  render(<SearchComparison />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Compare/i);
  expect(linkElement).toBeInTheDocument();
});

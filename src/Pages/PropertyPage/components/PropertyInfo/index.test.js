import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import PropertyInfo from './index.js';

test('render PropertyInfo', () => {
  render(<PropertyInfo />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Info/i);
  expect(linkElement).toBeInTheDocument();
});

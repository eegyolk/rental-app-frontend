import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import PropertyImages from './index.js';

test('render PropertyImages', () => {
  render(<PropertyImages />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Images/i);
  expect(linkElement).toBeInTheDocument();
});

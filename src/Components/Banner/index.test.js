import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Banner from './index.js';

test('render Banner', () => {
  render(<Banner />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/100/i);
  expect(linkElement).toBeInTheDocument();
});

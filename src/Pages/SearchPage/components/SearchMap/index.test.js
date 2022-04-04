import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import SearchMap from './index.js';

test('render SearchMap', () => {
  render(<SearchMap />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Map/i);
  expect(linkElement).toBeInTheDocument();
});

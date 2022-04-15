import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import SearchByPropertyType from './index.js';

test('render SearchByPropertyType', () => {
  render(<SearchByPropertyType />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Filter/i);
  expect(linkElement).toBeInTheDocument();
});

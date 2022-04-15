import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import SearchTags from './index.js';

test('render SearchTags', () => {
  render(<SearchTags />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Filter/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';

import Search from './index.js';

test('renders This is my search page.', () => {
  render(<Search />);
  const linkElement = screen.getByText(/This is my search page./i);
  expect(linkElement).toBeInTheDocument();
});

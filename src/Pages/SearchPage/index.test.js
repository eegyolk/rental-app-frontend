import { render, screen } from '@testing-library/react';

import SearchPage from './index.js';

test('renders This is my search page.', () => {
  render(<SearchPage />);
  const linkElement = screen.getByText(/This is my search page./i);
  expect(linkElement).toBeInTheDocument();
});

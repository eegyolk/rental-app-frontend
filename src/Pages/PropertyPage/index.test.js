import { render, screen } from '@testing-library/react';

import PropertyPage from './index.js.js';

test('renders This is my property page.', () => {
  render(<PropertyPage />);
  const linkElement = screen.getByText(/This is my property page./i);
  expect(linkElement).toBeInTheDocument();
});

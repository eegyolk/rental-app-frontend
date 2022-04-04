import { render, screen } from '@testing-library/react';

import AgentPage from './index.js';

test('renders This is my agent page.', () => {
  render(<AgentPage />);
  const linkElement = screen.getByText(/This is my agent page./i);
  expect(linkElement).toBeInTheDocument();
});

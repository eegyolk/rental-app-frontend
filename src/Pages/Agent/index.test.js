import { render, screen } from '@testing-library/react';
import Agent from './index.js';

test('renders This is my agent page.', () => {
  render(<Agent />);
  const linkElement = screen.getByText(/This is my agent page./i);
  expect(linkElement).toBeInTheDocument();
});

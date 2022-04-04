import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Header from './index.js';

test('renders HeaderAnnouncement component', () => {
  render(<Header />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/Announcement/i);
  expect(linkElement).toBeInTheDocument();
});

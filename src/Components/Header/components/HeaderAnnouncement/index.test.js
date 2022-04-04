import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HeaderAnnouncement from './index.js';

test('render Announcement', () => {
  render(<HeaderAnnouncement />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/Announcement/i);
  expect(linkElement).toBeInTheDocument();
});

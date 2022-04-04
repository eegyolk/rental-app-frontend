import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HomeAdvertisement from './index.js';

test('render HomeAdvertisement', () => {
  render(<HomeAdvertisement />, { wrapper: MemoryRouter });
  const linkElement = screen.getAllByText(/Your/i);
  expect(linkElement).toBeInTheDocument();
});

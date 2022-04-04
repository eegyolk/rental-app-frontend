import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import HeaderNavigation from './index.js';

test('render navigation Home', () => {
  render(<HeaderNavigation />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('render navigation Search', () => {
  render(<HeaderNavigation />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('render navigation For renters', () => {
  render(<HeaderNavigation />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/For renters/i);
  expect(linkElement).toBeInTheDocument();
});

test('render navigation For agents', () => {
  render(<HeaderNavigation />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/For agents/i);
  expect(linkElement).toBeInTheDocument();
});

test('render navigation For landlords', () => {
  render(<HeaderNavigation />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/For landlords/i);
  expect(linkElement).toBeInTheDocument();
});

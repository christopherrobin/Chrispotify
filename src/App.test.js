import { render, screen } from '@testing-library/react';
import Header from '.././components/Header';

test('renders GitHub link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/GitHub/i);
  expect(linkElement).toBeInTheDocument();
});

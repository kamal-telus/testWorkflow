import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('renders welcome text', () => {
  render(<Welcome />);
  const linkElement = screen.getByText(/To Do/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders input button', () => {
  render(<Welcome />);
  const input = screen.getByRole('textbox', 'type');
  expect(input.name).toBe('task');
  expect(input).toBeInTheDocument();
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PageError } from './PageError';

it('renders', () => {
  const err = new Error('testError');
  err.stack = 'testStack';
  render(<PageError title="testTitle" error={err} />);

  const errName = screen.getByText(/testTitle/);
  expect(errName).toBeInTheDocument();

  const msg = screen.getByText(/testError/);
  expect(msg).toBeInTheDocument();

  const stack = screen.getByText(/testStack/);
  expect(stack).toBeInTheDocument();
});

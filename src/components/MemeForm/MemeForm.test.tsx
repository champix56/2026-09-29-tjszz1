import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import MemeForm from './MemeForm';

describe('<MemeForm />', () => {
  test('should mount', () => {
    render(<MemeForm />);

    const memeForm = screen.getByTestId('MemeForm');

    expect(memeForm).toBeInTheDocument();
  });
});
 
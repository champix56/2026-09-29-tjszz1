import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('should mount', () => {
    render(<Navbar />);

    const navbar = screen.getByTestId('Navbar');

    expect(navbar).toBeInTheDocument();
  });
});

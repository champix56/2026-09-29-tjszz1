import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import MemeThumbnail from './MemeThumbnail';

describe('<MemeThumbnail />', () => {
  test('should mount', () => {
    render(<MemeThumbnail />);

    const memeThumbnail = screen.getByTestId('MemeThumbnail');

    expect(memeThumbnail).toBeInTheDocument();
  });
});

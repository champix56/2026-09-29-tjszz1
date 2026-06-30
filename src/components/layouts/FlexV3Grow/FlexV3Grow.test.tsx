import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import FlexV3Grow from './FlexV3Grow';

describe('<FlexV3Grow />', () => {
  test('should mount', () => {
    render(<FlexV3Grow ><div>test</div></FlexV3Grow>);

    const flexV3Grow = screen.getByTestId('FlexV3Grow');

    expect(flexV3Grow).toBeInTheDocument();
  });
});
 
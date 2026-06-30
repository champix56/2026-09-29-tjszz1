import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import FlexH1Grow from './FlexH1Grow';

describe('<FlexH1Grow />', () => {
  test('should mount', () => {
    render(<FlexH1Grow ><div>test</div></FlexH1Grow>);

    const flexH1Grow = screen.getByTestId('FlexH1Grow');

    expect(flexH1Grow).toBeInTheDocument();
  });
});
 
// @vitest-environment jsdom
import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Logo from './Logo.svelte';

test('Component renders properly', async () => {
  const { container } = render(Logo);

  const component = screen.getByRole('link');
  expect(component).toBeInTheDocument();

  expect(container.querySelector('img')).toHaveAttribute('src');
});

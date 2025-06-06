// @vitest-environment jsdom
import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Logo from './Logo.svelte';

test('Component renders properly', async () => {
  render(Logo);
  const image = screen.getByRole('image');
  expect(image).toBeInTheDocument();
});

/// <reference types='vitest' />
import { getViteConfig } from 'astro/config';
import { mergeConfig } from 'vitest/config';
import { baseConfig } from '@repo/vitest-config/base';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default getViteConfig(
  mergeConfig(baseConfig, {
    plugins: [svelte()],
    test: {
      globals: true,
      coverage: {
        exclude: [
          'dist/**',
          'static/**',
          'types/**',
          'turbo/**',
          '**/*.config.*'
        ],
      },
      include: [
        '**/*.test.ts'
      ],
      setupFiles: ['./vitest.setup.ts']
    },
    resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined
  })
);

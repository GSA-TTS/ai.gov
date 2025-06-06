/// <reference types='vitest' />
import {getViteConfig} from 'astro/config';
import {mergeConfig} from 'vitest/config';
import {baseConfig} from '@repo/vitest-config/base';

export default getViteConfig(
  mergeConfig(baseConfig, {
    test: {
      coverage: {
        exclude: [
          '**/dist/**',
          '**/static/**',
          '**/types/**',
          '**/turbo/**',
          '**/*.config.*',
          '**/*.svelte'
        ],
      },
      include: [
        '**/*.test.ts'
      ]
    },
  })
);

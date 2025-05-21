/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import {baseConfig} from "@repo/vitest-config/base";

export default getViteConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    coverage: {
      ...baseConfig.test.coverage,
      exclude: ["**/dist/**", "**/playwright-report/**", "**/e2e-tests/**", "**/*.config.*"],
    },
    include: [
      'src/**/*.test.ts'
    ]
  },
});

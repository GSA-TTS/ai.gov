/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import {baseConfig} from "@repo/vitest-config/base";

export default getViteConfig({
  ...baseConfig,
  test: {
    include: [
      'src/**/*.test.ts'
    ]
  },
});

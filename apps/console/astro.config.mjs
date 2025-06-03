// @ts-check
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createAstroConfig } from '@repo/ui/astro-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default createAstroConfig({
  appDir: __dirname,
  overrides: {
    // Add any console-specific overrides here
  }
});
// @ts-check
import { fileURLToPath } from 'url';
import { dirname, join as pathJoin } from 'path';
import globalData from '@csstools/postcss-global-data';
import customMedia from 'postcss-custom-media';
import { createAstroConfig } from '@repo/ui/astro-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default createAstroConfig({
  appDir: __dirname,
  overrides: {
    vite: {
      css: {
        postcss: {
          plugins: [
            globalData({
              files: [
                pathJoin(__dirname, '../../packages/style-tokens/dist/css/custom-media.css'),
              ],
            }),
            customMedia(),
          ],
        },
      },
    }
  }
});

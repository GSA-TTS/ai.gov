// @ts-check
import { defineConfig, type AstroUserConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import purgecss from 'astro-purgecss';
import { join as pathJoin, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { normalizeTrailingSlash } from "../helpers/string-formatters";

interface AstroConfigOptions {
  appDir: string;
  overrides?: Partial<AstroUserConfig>;
}

/**
 * Creates an Astro config with app-specific customizations
 */
export function createAstroConfig({ appDir, overrides = {} }: AstroConfigOptions): AstroUserConfig {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const baseConfig = defineConfig({
    base: normalizeTrailingSlash(process.env.BASEURL || ''),
    integrations: [
      svelte(),
      // purgecss should go last
      purgecss({
        fontFace: true, // Removes unused @font-face rules
        keyframes: true, // Removes unused keyframes
        safelist: {
          standard: [
            /abbr/,
            "kbd",
            "samp",
            "sub",
            "optgroup",
            "fieldset",
            "summary",
            "cite",
            "dfn",
            "pre",
          ],
          deep: [
            /usa-in-page.+/,
          ],
        },
        dynamicAttributes: [
          "contentEditable",
          "title",
          "type",
        ],
        blocklist: [],
        content: [
          pathJoin(appDir, 'src/**/*.{astro,svelte,ts,tsx,js,jsx}'),
          pathJoin(__dirname, '../components/**/*.{svelte,js,jsx,astro}'),
        ],
        extractors: [
          {
            extractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            extensions: ['astro', 'html'],
          },
        ],
      }),
    ],
    experimental: {
      // Astro Experimental Fonts API for managing custom fonts
      fonts: [
        {
          name: 'Archivo',
          cssVariable: '--ai-font-family-sans', // Scoped variable name
          provider: 'local', // Serves fonts locally
          variants: [
            {
              src: [{ url: './src/fonts/archivo-regular.woff2' }],
              weight: 400,
              style: 'normal',
            },
            {
              src: [{ url: './src/fonts/archivo-semibold.woff2' }],
              weight: 600,
              style: 'normal',
            },
          ],
        },
      ],
    },
    image: {
      service: {
        entrypoint: 'astro/assets/services/noop'
      }
    },
    vite: {
      optimizeDeps: {
        include: ['@repo/ui'],
      },
      resolve: {
        dedupe: ['@repo/ui'],
        alias: {
          '@ui-assets': resolve(appDir, '../../packages/ui/assets')
        },
      },
      ssr: {
        noExternal: ['@repo/ui'],
      },
      assetsInclude: ['**/*.svg']
    },
  });

  // Merge with any app-specific overrides
  return {
    ...baseConfig,
    ...overrides,
    // Deep merge some nested objects
    vite: {
      ...baseConfig.vite,
      ...overrides.vite,
      resolve: {
        ...baseConfig.vite?.resolve,
        ...overrides.vite?.resolve,
        alias: {
          ...baseConfig.vite?.resolve?.alias,
          ...overrides.vite?.resolve?.alias,
        },
      },
    },
    integrations: overrides.integrations || baseConfig.integrations,
  };
}
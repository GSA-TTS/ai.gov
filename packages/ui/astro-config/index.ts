// @ts-check
import { defineConfig } from 'astro/config';
import type { AstroIntegration } from 'astro';
import svelte from '@astrojs/svelte';
import purgecss from 'astro-purgecss';
import { join as pathJoin, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { normalizeTrailingSlash } from "../helpers/string-formatters";

interface AstroConfigOptions {
  appDir: string;
  overrides?: {
    integrations?: AstroIntegration[];
    vite?: Record<string, unknown>;
    [key: string]: unknown;
  };
}

/**
 * Creates an Astro config with app-specific customizations
 */
export function createAstroConfig({ appDir, overrides = {} }: AstroConfigOptions) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const baseIntegrations: AstroIntegration[] = [
    svelte(),
    // purgecss should go last
    purgecss({
      fontFace: true, // Removes unused @font-face rules
      keyframes: true, // Removes unused keyframes
      variables: true, // Removes unused CSS variables
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
    })
  ];

  // Handle vite config merging separately
  const baseViteConfig = {
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
  };

  const mergedViteConfig = overrides.vite ? {
    ...baseViteConfig,
    ...overrides.vite,
    resolve: {
      ...baseViteConfig.resolve,
      ...(overrides.vite.resolve as Record<string, unknown> || {}),
      alias: {
        ...baseViteConfig.resolve.alias,
        ...((overrides.vite.resolve as Record<string, unknown>)?.alias as Record<string, unknown> || {}),
      },
    },
  } : baseViteConfig;

  return defineConfig({
    base: normalizeTrailingSlash(process.env.BASEURL || ''),
    integrations: overrides.integrations || baseIntegrations,
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
    vite: mergedViteConfig,
    // Spread other overrides (excluding the ones we handle specifically)
    ...Object.fromEntries(
      Object.entries(overrides).filter(([key]) => !['integrations', 'vite'].includes(key))
    ),
  });
}

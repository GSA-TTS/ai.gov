// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import purgecss from 'astro-purgecss';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { join as pathJoin, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const addTrailingSlash = (path) => {
  return path.endsWith('/') ? path : `${path}/`;
};

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@ui': pathJoin(__dirname, '../../packages/ui'),
        // Ensure the existing '@/' alias for src is also here if needed for Vite, 
        // though it's often handled by Astro's default setup for src.
        // For consistency with tsconfig, let's add it:
        '@': pathJoin(__dirname, './src'), 
      },
    },
    css: {
      preprocessorOptions: {
        // @ts-ignore - Suppressing type error for scss options, as runtime behavior is correct.
        scss: {
          includePaths: ['/Users/ivanmetzger/GitHub/ai.gov/packages/ui/node_modules/@uswds/uswds/dist/scss/stylesheets/packages'],
        },
      },
    },
  },
  base: addTrailingSlash(process.env.BASEURL || ''),
  integrations: [
    tailwind(), // Tailwind integration first
    svelte(),
    react(),    // React integration
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
        pathJoin(__dirname, 'src/**/*.{astro,svelte,ts,tsx,js,jsx}'),
        pathJoin(__dirname, '../../packages/ui', '/src/**/*.{svelte,js,jsx}'),
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
});

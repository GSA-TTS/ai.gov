import baseConfig from '../../.prettierrc.mjs';

export default {
  ...baseConfig,
  overrides: [
    ...baseConfig.overrides,
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
  plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte'],
};

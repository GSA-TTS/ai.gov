import { formats, transformGroups, transformTypes } from 'style-dictionary/enums';

const { cssVariables, json } = formats;
const { css, js } = transformGroups;
const buildPath = 'dist/';
const prefix = 'ai-';

export default {
  source: ['src/tokens/index.js'],
  platforms: {
    css: {
      transformGroup: css,
      buildPath: buildPath,
      prefix,
      files: [
        {
          destination: 'variables.css',
          format: cssVariables,
        },
      ],
    },
    json: {
      transformGroup: js,
      buildPath: buildPath,
      files: [
        {
          destination: 'tokens.json',
          format: json,
        },
      ],
    },
  },
};

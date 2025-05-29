import { formats, transformGroups } from 'style-dictionary/enums';

const { cssVariables, json } = formats;
const { css, js } = transformGroups;
const buildPath = 'dist/';
const prefix = 'ai-';

export default {
  source: [`${buildPath}/tokens/index.js`],
  platforms: {
    css: {
      transformGroup: css,
      buildPath: `${buildPath}/css/`,
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
      buildPath: `${buildPath}/css/`,
      files: [
        {
          destination: 'tokens.json',
          format: json,
        },
      ],
    },
  },
};

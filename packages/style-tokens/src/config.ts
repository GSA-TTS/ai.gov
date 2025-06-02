import { formats, transformGroups } from 'style-dictionary/enums';
import { transform } from '@divriots/style-dictionary-to-figma';

const { cssVariables, json, jsonFlat } = formats;
const { css, js } = transformGroups;
const buildPath = 'dist';
const prefix = 'ai-';

export default {
  hooks: {
    formats: {
      // @ts-ignore
      figmaTokensPluginJson: async ({ dictionary }) => {
        const transformedTokens = transform(dictionary.tokens);
        return JSON.stringify(transformedTokens, null, 2);
      },
    },
  },
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
        {
          destination: 'token-list.json',
          format: jsonFlat,
        },
      ],
    },
    figma: {
      transformGroup: js,
      buildPath: `${buildPath}/`,
      files: [
        {
          destination: 'figma-tokens.json',
          format: 'figmaTokensPluginJson',
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

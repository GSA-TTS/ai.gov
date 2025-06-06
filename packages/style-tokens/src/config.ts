import { formats, transformGroups } from 'style-dictionary/enums';
import { transform } from '@divriots/style-dictionary-to-figma';
import { Dictionary, TransformedToken } from 'style-dictionary';

const { cssVariables, json, jsonFlat } = formats;
const { css, js } = transformGroups;
const buildPath = 'dist';
const prefix = 'ai-';

export default {
  hooks: {
    formats: {
      // @ts-ignore
      figmaTokensPluginJson: async ({
        dictionary,
      }: {
        dictionary: Dictionary;
      }) => {
        const transformedTokens = transform(dictionary.tokens);
        return JSON.stringify(transformedTokens, null, 2);
      },
      customMedia: async ({ dictionary }: { dictionary: Dictionary }) => {
        return dictionary.allTokens
          .map((prop: TransformedToken) => {
            const { name, value } = prop;
            const cleanedName = name.replace(/_/g, '-');
            if (name.includes('breakpoint')) {
              return `@custom-media --${cleanedName} ${value};`;
            }
            return;
          })
          .filter(item => typeof item === 'string' && item.length > 0)
          .join('\n');
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
    mediaQuery: {
      transformGroup: css,
      buildPath: `${buildPath}/css/`,
      prefix,
      files: [
        {
          destination: `custom-media.css`,
          format: 'customMedia',
          filter: { attributes: { category: 'size' } },
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

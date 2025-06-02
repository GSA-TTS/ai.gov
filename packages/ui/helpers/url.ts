import { normalizeTrailingSlash, cleanLeadingSlashes, cleanTrailingSlashes, isValidPath } from './string-formatters.js';

export const getBaseUrl = () => {
  const { BASEURL } = process.env;

  if (!BASEURL) {
    return '/';
  }

  return normalizeTrailingSlash(BASEURL);
};

export const getUrlFromBase = (assetPath?: string, customBase?: string) => {
  const base = customBase || getBaseUrl();
  
  if (!isValidPath(assetPath)) {
    return normalizeTrailingSlash(base);
  }

  const cleanAssetPath = cleanLeadingSlashes(assetPath);
  const normalizedBase = normalizeTrailingSlash(base);

  return `${cleanTrailingSlashes(normalizedBase)}/${cleanAssetPath}`;
};

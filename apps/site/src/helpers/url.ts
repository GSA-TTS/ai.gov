import { normalizeTrailingSlash } from './string-formatters.js';

export const getBaseUrl = () => {
  const { BASEURL } = process.env;

  if (!BASEURL) {
    return '/';
  }

  return normalizeTrailingSlash(BASEURL);
};

export const getUrlFromBase = (assetPath?: string) => {
  const base = normalizeTrailingSlash(getBaseUrl());
  if (typeof assetPath !== 'string' || !assetPath) {
    return base;
  }
  return `${base}${assetPath.replace(/^\/+/, '')}`;
};

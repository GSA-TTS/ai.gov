import { AstroGlobal } from 'astro';
import { siteName } from '../../constants.js';
import { addTrailingSlash } from './string-formatters.js';

export const getPageTitle = ({ props }: AstroGlobal) => {
  return props.title || siteName;
};

export const getBaseUrl = () => {
  const { BASEURL } = process.env;

  if (!BASEURL) {
    return '/';
  }

  return addTrailingSlash(BASEURL);
};

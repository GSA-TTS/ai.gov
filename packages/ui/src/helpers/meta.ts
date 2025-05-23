import { AstroGlobal } from 'astro';
import { siteName } from '@repo/constants';

export const getPageTitle = ({ props }: AstroGlobal) => {
  return props.title || siteName;
};

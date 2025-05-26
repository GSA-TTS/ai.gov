import { AstroGlobal } from 'astro';
import { siteName } from '@repo/ui/constants';

export const getPageTitle = ({ props }: AstroGlobal) => {
  return props.title || siteName;
};

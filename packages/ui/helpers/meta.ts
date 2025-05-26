import type { AstroGlobal } from 'astro';
import { siteName } from '@repo/ui/constants';

export const getPageTitle = (astro: Pick<AstroGlobal, 'props'>): string => {
  return astro.props?.title || siteName;
};

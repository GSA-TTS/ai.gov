import { getUrlFromBase } from '@repo/ui/helpers/url.js';

export const getIconUrl = (
  iconName: string,
  folder = 'uswds/img/usa-icons'
) => {
  return getUrlFromBase(`/${folder}/${iconName}.svg`);
};

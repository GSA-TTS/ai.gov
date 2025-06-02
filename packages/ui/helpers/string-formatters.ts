export const cleanLeadingSlashes = (path: string) => path.replace(/^\/+/, '');

export const cleanTrailingSlashes = (path: string) => path.replace(/\/+$/, '');

export const addTrailingSlash = (path: string): string => `${cleanTrailingSlashes(path)}/`;

export const isValidPath = (path?: string): path is string => typeof path === 'string' && path.length > 0;

export const normalizeTrailingSlash = (path?: string) => {
  if (!isValidPath(path)) {
    return '/';
  }
  return addTrailingSlash(path);
};

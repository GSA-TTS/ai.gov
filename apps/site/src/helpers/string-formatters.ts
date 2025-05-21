export const normalizeTrailingSlash = (path?: string) => {
  if (typeof path !== 'string' || !path) {
    return '/';
  }
  return path.replace(/\/+$/, '') + '/';
};

export const cleanLeadingSlashes = (path: string): string => {
  let start = 0;
  while (start < path.length && path[start] === '/') {
    start++;
  }
  return path.slice(start);
};

export const cleanTrailingSlashes = (path: string): string => {
  let end = path.length;
  while (end > 0 && path[end - 1] === '/') {
    end--;
  }
  return path.slice(0, end);
};

export const addTrailingSlash = (path: string): string => `${cleanTrailingSlashes(path)}/`;

export const isValidPath = (path?: string): path is string => typeof path === 'string' && path.length > 0;

export const normalizeTrailingSlash = (path?: string) => {
  if (!isValidPath(path)) {
    return '/';
  }
  return addTrailingSlash(path);
};

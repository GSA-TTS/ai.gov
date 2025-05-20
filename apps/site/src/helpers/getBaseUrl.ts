export const getBaseUrl = () => {
  const { BASEURL } = import.meta.env;

  if (!BASEURL) {
    return '/';
  }

  return BASEURL;
};

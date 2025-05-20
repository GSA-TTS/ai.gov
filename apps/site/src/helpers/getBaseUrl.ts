export const getBaseUrl = () => {
  const { BASEURL } = process.env;

  if (!BASEURL) {
    return '/';
  }

  return BASEURL;
};

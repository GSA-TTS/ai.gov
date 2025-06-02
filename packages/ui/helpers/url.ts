import { normalizeTrailingSlash, cleanTrailingSlashes, isValidPath } from './string-formatters.js';

// TODO: remove once we define a true production environment
const detectSiteEnvironment = (): string | null => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;

    const isValidFederalistDomain = 
      hostname === 'sites.pages.cloud.gov' ||
      hostname.endsWith('.sites.pages.cloud.gov')
    
    if (isValidFederalistDomain) {
      return '/site/gsa-tts/ai.gov/';
    }
  }
  
  return null;
};

export const getBaseUrl = () => {
  const detectedSiteBase = detectSiteEnvironment();
  if (detectedSiteBase) {
    return detectedSiteBase;
  }

  const { BASEURL } = process.env;

  if (!BASEURL) {
    return '/';
  }

  return normalizeTrailingSlash(BASEURL);
};

export const getUrlFromBase = (assetPath?: string, customBase?: string) => {
  const base = customBase || getBaseUrl();
  
  if (!isValidPath(assetPath)) {
    return normalizeTrailingSlash(base);
  }

 const cleanAssetPath = assetPath.replace(/^\/+/, '');
 const normalizedBase = normalizeTrailingSlash(base);

  return `${cleanTrailingSlashes(normalizedBase)}/${cleanAssetPath}`;
};

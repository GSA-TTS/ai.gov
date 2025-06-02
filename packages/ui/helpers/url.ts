import { normalizeTrailingSlash, cleanTrailingSlashes, isValidPath } from './string-formatters.js';

// TODO: remove once we define a true production environment
const detectSiteEnvironment = (): string | null => {
if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    const isValidFederalistDomain = 
      hostname === 'sites.pages.cloud.gov' ||
      hostname.endsWith('.sites.pages.cloud.gov')
    
    if (isValidFederalistDomain) {
      const siteMatch = pathname.match(/^(\/site\/[^/]+\/[^/]+)/);
      
      if (siteMatch) {
        return siteMatch[1] + '/';
      }
      
      if (pathname.startsWith('/site/') || pathname.includes('/site/')) {
        const flexibleMatch = pathname.match(/(\/site\/[^/]+\/[^/]+)/);
        if (flexibleMatch) {
          return flexibleMatch[1] + '/';
        }
      }
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
  const autoDetectedBase = getBaseUrl();

  let base: string;
  if (customBase && customBase !== '/' && !autoDetectedBase.includes('/site/')) {
    base = customBase;
  } else if (customBase && customBase !== '/' && autoDetectedBase.includes('/site/')) {
    base = autoDetectedBase;
  } else {
    base = autoDetectedBase;
  }
  
  if (!isValidPath(assetPath)) {
    return normalizeTrailingSlash(base);
  }

 const cleanAssetPath = assetPath.replace(/^\/+/, '');
 const normalizedBase = normalizeTrailingSlash(base);

  return `${cleanTrailingSlashes(normalizedBase)}/${cleanAssetPath}`;
};

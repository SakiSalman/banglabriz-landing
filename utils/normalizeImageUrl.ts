/**
 * Ensures the URL starts with "https://".
 * @param url - The input URL string.
 * @returns The normalized URL with "https://" prefix if missing.
 */
const normalizeImageUrl = (url: string): string => {
  if (!url) return '/images/default.png';
  return url.startsWith('https://') ? url : `https://${url}`;
};

export default normalizeImageUrl;

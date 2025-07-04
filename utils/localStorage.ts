/**
 * Get data from localStorage and parse it
 * @param key - localStorage key
 * @returns parsed data or null if not found/invalid
 */
export function getLocalStorageData<T>(key: string): T | null {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      console.warn(`No data found in localStorage for key: ${key}`);
      return null;
    }
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Failed to parse localStorage data for key ${key}:`, error);
    return null;
  }
}

/**
 * Set data in localStorage
 * @param key - localStorage key
 * @param data - data to store
 */
export function setLocalStorageData<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Failed to store data in localStorage for key ${key}:`, error);
  }
}

/**
 * Remove data from localStorage
 * @param key - localStorage key
 */
export function removeLocalStorageData(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Failed to remove data from localStorage for key ${key}:`, error);
  }
}

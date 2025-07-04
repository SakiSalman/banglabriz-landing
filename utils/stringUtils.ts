/**
 * Capitalizes the first letter of a string
 * @param str - The input string
 * @returns The string with its first letter capitalized
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Capitalizes the first letter of each word in a string
 * @param str - The input string
 * @returns The string with the first letter of each word capitalized
 */
export const capitalizeWords = (str: string): string => {
  if (!str) return str;
  return str.split(' ').map(capitalizeFirstLetter).join(' ');
};

export const TitleCaseWords = (str: string): string => {
  if (str && str?.length) {
    return str?.replace(/[\w-]+/g, function (txt: string) {
      const text = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      if (text.includes('_')) {
        const str = text.split('_');
        let finalString = '';
        for (let i = 0; i < str?.length; i++) {
          const newString = str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase();
          finalString += newString + ' ';
        }
        return finalString.trim();
      } else if (text.includes('-')) {
        const str = text.split('-');
        let finalString = '';
        for (let i = 0; i < str?.length; i++) {
          const newString = str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase();
          finalString += newString + ' ';
        }
        return finalString.trim();
      }
      return text;
    });
  }
  return '';
};

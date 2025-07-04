export function generateStrongPassword(length = 12): string {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const allChars = uppercase + lowercase + numbers + symbols;

  if (length < 8) {
    throw new Error('Password length should be at least 8 characters');
  }

  // Ensure at least one character from each group
  const getRandom = (chars: string): string => chars[Math.floor(Math.random() * chars.length)];

  const password = [
    getRandom(uppercase),
    getRandom(lowercase),
    getRandom(numbers),
    getRandom(symbols),
    ...Array.from({ length: length - 4 }, () => getRandom(allChars)),
  ];

  // Shuffle the password array to randomize character positions
  return password.sort(() => 0.5 - Math.random()).join('');
}
export function capitalizeFirstLetter(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

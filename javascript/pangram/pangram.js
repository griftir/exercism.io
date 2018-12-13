export function isPangram(aString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const allcharacters = {};
  aString.toLowerCase()
    .replace(/[^a-z]/ig, '')
    .split('')
    .forEach((character) => {
      allcharacters[character] = allcharacters[character] || 0;
      allcharacters[character] += 1;
    });

  return aString.length > 0
  && Object.keys(allcharacters).sort().every((value, index) => value === alphabet[index]);
}

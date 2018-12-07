export function isPangram(aString) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const list = characters.split('');
  let count = 0;
  list.forEach((element) => {
    if (aString.toLowerCase().includes(element)) {
      count += 1;
    }
  });
  return (count === 26);
}

function reverseString(s) {
  let ans = '';
  for (let index = s.length - 1; index >= 0; index -= 1) {
    ans += s.charAt(index);
  }

  return ans;
}
console.log(reverseString('FUCK'));

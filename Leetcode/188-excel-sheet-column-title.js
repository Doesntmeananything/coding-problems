/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = (n) => {
  // uppercase char codes
  // A = 65
  // Z = 90
  let result = "";
  while (n >= 1) {
    n--;
    result = String.fromCharCode((n % 26) + 65) + result;
    n /= 26;
  }
  return result;
};

const num = 703;
console.log(convertToTitle(num));

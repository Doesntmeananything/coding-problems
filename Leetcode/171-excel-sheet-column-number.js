/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = (s) => {
  // uppercase char codes
  // A = 65
  // Z = 90
  let result = 0;
  for (let i = s.length; i > 0; i--) {
    result += Math.pow(26, s.length - i) * (s.charCodeAt(i - 1) - 65 + 1);
  }
  return result;
};

const column = "FXSHR";
console.log(titleToNumber(column));

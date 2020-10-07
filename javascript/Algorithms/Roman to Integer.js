/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };

  const regexp = /(I[VX])|(X[LC])|(C[DM])|(.{1})/g;
  const stringToArray = s.split(regexp).filter(x => x);
  const reducer = (acc, curVal) => {
    return acc + roman[curVal];
  };
  return stringToArray.reduce(reducer, 0);
};

var romanToIntOptimised = function(s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let i;
  let result = 0;
  for (i in s) {
    // Checks if the current numeral is higher than the previous one
    // If so, adds a doubled difference to account for earlier addition
    if (roman[s[i]] > roman[s[i - 1]]) {
      result += roman[s[i]] - 2 * roman[s[i - 1]];
    } else {
      result += roman[s[i]];
    }
  }
  return result;
};

console.log(romanToIntOptimised("III"));
console.log(romanToIntOptimised("IV"));
console.log(romanToIntOptimised("IX"));
console.log(romanToIntOptimised("LVIII"));
console.log(romanToIntOptimised("MCMXCIV"));

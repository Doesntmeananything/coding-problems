/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const stringToLoop = a.length > b.length ? a : b;
  let result = "";
  let carry = 0;
  for (let i = stringToLoop.length - 1; i >= 0; i--) {
    if (a[i] == 1 && b[i] == 1) {
      carry = 1;
      result = "0" + result;
    } else if (carry == 1 && (a[i] == 0 || b[i] == 0)) {
      carry = 0;
      result = "1" + result;
    }
  }
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));

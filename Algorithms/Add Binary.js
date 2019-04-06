/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a == b && a == "0") return "0";
  let result = "";
  let carry = 0;
  const longerString = a.length > b.length ? a : b;
  const shorterString = a.length > b.length ? b : a;
  for (let i = longerString.length - 1; i >= 0; i--) {
    let parallelNumber =
      Number(shorterString[i - (longerString.length - shorterString.length)]) ||
      0;
    let sum = Number(longerString[i]) + parallelNumber + carry;
    if (sum > 1) {
      carry = 1;
      result = sum - 2 + result;
    } else if (sum == 0 && carry == 0) {
      result = "0" + result;
    } else {
      carry = 0;
      result = "1" + result;
    }
  }
  if (carry == 1) {
    result = "1" + result;
  }

  return result;
};

console.log(addBinary("100", "110010"));
// console.log(addBinary("11", "1"));
// console.log(addBinary("0", "0"));
// console.log(addBinary("1", "1"));
// console.log(addBinary("1", "0"));
// console.log(addBinary("1010", "1011"));
// console.log(addBinary("1110111110", "1010110011"));

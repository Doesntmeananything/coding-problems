/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n == 1) return "1";
  const sequence = new Map();
  sequence.set(1, "1");
  for (let i = 2; i < n + 1; i++) {
    let previousTerm = sequence.get(i - 1);
    let newTerm = "";
    let countsOfNumber = 1;
    for (let j = 0; j < previousTerm.length; j++) {
      let currentNumber = previousTerm[j];
      let nextNumber = previousTerm[j + 1] || 0;
      if (currentNumber === nextNumber) {
        countsOfNumber += 1;
      } else {
        newTerm = `${newTerm}${countsOfNumber.toString()}${currentNumber}`;
        countsOfNumber = 1;
      }
    }
    sequence.set(i, newTerm);
  }
  return sequence.get(n);
};

// 1
console.log(countAndSay(1));
// 1211
console.log(countAndSay(4));
// 13112221
console.log(countAndSay(7));
// 13211311123113112211
console.log(countAndSay(10));

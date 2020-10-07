/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const toArray = s.trimEnd().split(" ");
  return toArray[toArray.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("My Name Is Andrey"));
console.log(lengthOfLastWord("I've come to bargain    "));

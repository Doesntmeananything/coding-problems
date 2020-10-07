/**
 * https://leetcode.com/problems/valid-palindrome/
 *
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  const filtered = s.toLowerCase().match(/[a-z0-9]/g) || [""];
  return filtered.join("") === filtered.reverse().join("");
};

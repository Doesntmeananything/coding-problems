/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Note: all given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';
    // Deal with edge cases
    if (strs.length === 0) return result;
    // Compare each char of the first word to corresponding chars
    // of all the rest of the words
    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i];
        if (strs.every((word) => {
            return word[i] === currentChar;
        })) {
            result += currentChar;
        } else {
            // Stop if no match is found
            break;
        };
    };
    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(['bread']));
console.log(longestCommonPrefix(["aca","cba"]));

/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Deal with edge cases
    if (s === '') return true;
    if ((s.length % 2) != 0) return false;

    // Create a hash table to look up valid pairs
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Use stack to check for valid pairs
    //
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === bracketPairs[stack[stack.length - 1]]) {
            stack.pop()
        } else {
            stack.push(s[i]);
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));

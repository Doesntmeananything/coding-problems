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

    // Use stack structure to check for valid pairs
    // Valid pairs will always be matched at the top of the stack
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        // If current bracket is a valid pair for the top of the stack
        if (s[i] === bracketPairs[stack[stack.length - 1]]) {
            // Remove the top and start looking for new pairs
            stack.pop()
        } else {
            // Else add the bracket to the top of the stack
            stack.push(s[i]);
        }
    }
    // If the stack is not empty, an invalid pair is present
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

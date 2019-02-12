/**
 * @param {number} x
 * @return {boolean}
 */
// Converts to string before checking
var isPalindromeToString = function(x) {
    if (x < 0) return false;
    const normal = x;
    const reverted = x.toString().split("").reverse().join("");
    return normal == reverted;
};

// Checks without type coercion
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x != 0)) return false;

    let reverted = 0;
    while (x > reverted) {
        reverted = reverted * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    
    return x === reverted || x === Math.floor(reverted / 10);
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(11));

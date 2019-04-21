/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 1) return 0;
  let a = 1;
  let b = 2;
  for (let i = 0; i < n - 1; i++) {
    [a, b] = [b, a + b];
  }
  return a;
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(0));

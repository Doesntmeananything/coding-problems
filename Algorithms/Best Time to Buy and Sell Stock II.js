/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let total = 0;
  let currentProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    currentProfit = prices[i + 1] - prices[i];
    if (currentProfit > 0) total += currentProfit;
  }

  return total;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));
console.log(maxProfit([0]));
console.log(maxProfit([]));

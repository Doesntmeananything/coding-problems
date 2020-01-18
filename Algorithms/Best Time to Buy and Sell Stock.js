/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  const length = prices.length;
  if (length < 2) return 0;

  let profit = 0;
  let minPrice = Infinity;
  for (let i = 0; i < length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - minPrice);
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 4, 1]));

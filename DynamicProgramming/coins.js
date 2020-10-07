const coinChange = (coins, amount) => {
  // determine the dp function
  // what's the state of the problem?
  // the number of coins can be infinite, but the amout is static
  // so the dp function depends on the target amount
  // dp(amount)

  // what choices can be made to change the current state?
  // the choice here is to choose a coin from the list and then
  // subtract that coin value from the amount

  const memo = {};
  const dp = (n) => {
    if (memo[n]) return memo[n];

    if (n == 0) return 0;
    if (n < 0) return -1;

    let result = Infinity;
    for (const coin of coins) {
      let subproblem = dp(n - coin);

      if (subproblem == -1) break;

      result = Math.min(result, 1 + subproblem);
    }

    memo[n] = result !== Infinity ? result : -1;
    return memo[n];
  };

  return dp(amount);
};

console.log(coinChange([1, 2, 5], 21));

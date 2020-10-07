const minDistance = (s1, s2) => {
  const dp = (i, j) => {
    // base case
    if (i === -1) return i + 1;
    if (j === -1) return j + 1;

    if (s1[i] === s2[j]) {
      return dp(i - 1, j - 1); // skip
    } else {
      return Math.min(
        dp(i, j - 1) + 1, // insert
        dp(i - 1, j) + 1, // delete
        dp(i - 1, j - 1) + 1 // replace
      );
    }
  };

  return dp(s1.length - 1, s2.length - 1);
};

const findGreatestCommonDivisor = function(m, n) {
  let remainder = m % n;
  while (remainder) {
    m = n;
    n = remainder;
    remainder = m % n;
  }
  return n;
};

console.log(findGreatestCommonDivisor(119, 544));

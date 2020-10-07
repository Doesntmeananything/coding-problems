const fib = (n) => {
  if (n == 1 || n == 2) return 1;

  let prev = 1;
  let curr = 1;

  for (let i = 3; i <= n; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};

console.log(fib(20));

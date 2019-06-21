function removeSmallest(numbers) {
  const result = [...numbers];
  result.splice(result.indexOf(Math.min(...result)), 1);
  return result;
}

console.log(
  removeSmallest([1, 2, 3, 4, 5]),
  removeSmallest([5, 3, 2, 1, 4]),
  removeSmallest([2, 2, 1, 2, 1]),
  removeSmallest([1]),
  removeSmallest([])
);

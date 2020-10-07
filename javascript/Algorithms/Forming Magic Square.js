const square = [[4, 8, 2], [4, 5, 7], [6, 1, 6]];
// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
  const allValidCombinations = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8]
  ];
  // If no proper flat available, otherwise use s.flat()
  const flat = [].concat(...s);

  const allCosts = [];

  allValidCombinations.forEach(combination => {
    let costForCombination = 0;
    combination.forEach((el, i) => {
      costForCombination += Math.abs(flat[i] - el);
    });
    allCosts.push(costForCombination);
  });

  return Math.min(...allCosts);
}

console.log(formingMagicSquare(square));

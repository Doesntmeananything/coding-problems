// https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript

const recoverSecret = triplets => {
  for (let [firstChar] of triplets) {
    if (triplets.every(triplet => triplet.indexOf(firstChar) <= 0)) {
      triplets
        .filter(([char]) => char == firstChar)
        .forEach(triplet => triplet.shift());
      return (
        firstChar +
        recoverSecret(triplets.filter(triplet => triplet.length > 0))
      );
    }
  }
  return "";
};

triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"]
];

console.log(recoverSecret(triplets1));

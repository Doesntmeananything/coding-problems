// https://www.codewars.com/kata/range-extraction/javascript

const extractRanges = list => {
  const result = [];

  for (
    let current = 0, runner = 0;
    current < list.length;
    current = runner + 1
  ) {
    result.push(list[current]);

    runner = current + 1;
    while (runner < list.length && list[runner] == list[runner - 1] + 1) {
      runner++;
    }
    runner--;

    if (current == runner) {
      result.push(",");
    } else if (current + 1 == runner) {
      result.push(",", list[runner], ",");
    } else {
      result.push("-", list[runner], ",");
    }
  }
  result.pop();
  return result.join("");
};

console.log(
  extractRanges([
    -6,
    -3,
    -2,
    -1,
    0,
    1,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    14,
    15,
    17,
    18,
    19,
    20
  ])
);

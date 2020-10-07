// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

const RomanNumerals = {
  romans: {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  },
  toRoman: function(num) {
    let result = "";

    for (let i of Object.keys(this.romans)) {
      let q = Math.floor(num / this.romans[i]);
      num -= q * this.romans[i];
      result += i.repeat(q);
    }

    return result;
  },
  fromRoman: function(num) {
    let result = 0;
    for (let char in num) {
      if (this.romans[num[char]] > this.romans[num[char - 1]]) {
        result += this.romans[num[char]] - 2 * this.romans[num[char - 1]];
      } else {
        result += this.romans[num[char]];
      }
    }
    return result;
  }
};

console.log(RomanNumerals.fromRoman("XXI"));
console.log(RomanNumerals.toRoman(1991));

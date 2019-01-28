String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

const str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());

function duplicateEncode(word) {
  const workArray = word.toLowerCase().split('');
  const result = workArray.map((char) => {
    if (workArray.indexOf(char) !== workArray.lastIndexOf(char)) {
      return ')';
    }
    return '(';
  });
  return result.join('');
}

console.log(duplicateEncode('(( @'));

/* You have an array of ints. Create function which groups numbers by sum of pairs

(sum = 5). Each element of array has to be used only once.
---
test data:
input: [22, 3, 5, 0, 2, 2]
resutls: [[3, 2], [5, 0]]

input: [-5, 33, 2, 2, 3, 5, 0, 10, 3]
resutls: [[-5, 10], [2, 3], [2, 3], [5, 0]]

input: [5, 5, 5, 0, 0, 0, 5]
resutls: [[5, 0], [5, 0], [5, 0]]
*/

// Using a hash, it's possible to perform this algorithm in O(n) time complexity

// We can set the default value for sum paramater with ES6 syntax
// which makes this function a bit more flexible
function groupIntoPairsBySum(arr, sum = 5) {
  const result = [];
  const hash = {};

  // Gather array elements and their total number into hashmap
  // Key = element, value = N of occurences
  // Time complexity: O(n)
  arr.forEach(el => {
    hash[el] = (hash[el] || 0) + 1;
  });

  // For each array element, look up number and its sum pair in hash in constant time
  // If their values > 0, decrement them and push them to result array
  // Time complexity: O(n)
  arr.forEach(el => {
    if (hash[el] && hash[sum - el]) {
      hash[el]--;
      hash[sum - el]--;

      result.push([el, sum - el]);
    }
  });

  return result;
}

// Test cases
arr1 = [22, 3, 5, 0, 2, 2];
console.log(groupIntoPairsBySum(arr1));

arr2 = [-5, 33, 2, 2, 3, 5, 0, 10, 3];
console.log(groupIntoPairsBySum(arr2));

arr3 = [5, 5, 5, 0, 0, 0, 5];
console.log(groupIntoPairsBySum(arr3));

arr4 = [5, 1];
console.log(groupIntoPairsBySum(arr4));

arr5 = [];
console.log(groupIntoPairsBySum(arr5));

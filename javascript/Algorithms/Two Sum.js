const twoSum = function(nums, target) {
  // A hash table provides much faster look up times
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const element = target - nums[i];
    // Populating and traversing the given array only once
    if (map.has(element)) {
      return [map.get(element), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([3, 5, 84, 456, 3], 6));
